# PayFast Integration Guide for Open Chats

## Overview

PayFast is South Africa's leading payment gateway, supporting all major South African banks, credit cards, and instant EFT. This guide covers the complete integration for the Open Chats platform.

---

## Why PayFast for South Africa?

### Advantages
- **Local Payment Methods:** Supports all SA banks and cards
- **Instant EFT:** Real-time bank transfers
- **Lower Fees:** 2.9% + R2.00 (vs Stripe's higher international fees)
- **ZAR Native:** No currency conversion fees for SA customers
- **Trusted:** Used by major SA retailers
- **Mobile Optimized:** Works seamlessly on SA mobile networks

### Supported Payment Methods
- All major SA credit/debit cards (Visa, Mastercard, Amex)
- Instant EFT (all major banks)
- Zapper
- SnapScan
- Mobicred
- SCode

---

## Setup Process

### 1. Create PayFast Account

1. Go to [payfast.co.za](https://www.payfast.co.za)
2. Sign up for a merchant account
3. Complete FICA verification (required for live payments)
4. Get your credentials:
   - Merchant ID
   - Merchant Key
   - Passphrase (set in settings)

### 2. Install Dependencies

```bash
npm install crypto
npm install @types/node
```

---

## Implementation

### Environment Variables

```bash
# .env.local

# PayFast Credentials
PAYFAST_MERCHANT_ID=10000100
PAYFAST_MERCHANT_KEY=46f0cd694581a
PAYFAST_PASSPHRASE=your-secure-passphrase
PAYFAST_MODE=sandbox # or 'live'

# URLs
NEXT_PUBLIC_BASE_URL=https://openchats.co.za
```

### PayFast Configuration

```typescript
// src/lib/payfast/config.ts

export const payfastConfig = {
  merchantId: process.env.PAYFAST_MERCHANT_ID!,
  merchantKey: process.env.PAYFAST_MERCHANT_KEY!,
  passphrase: process.env.PAYFAST_PASSPHRASE!,
  mode: process.env.PAYFAST_MODE || 'sandbox',
  
  // URLs
  get payfastUrl() {
    return this.mode === 'live'
      ? 'https://www.payfast.co.za/eng/process'
      : 'https://sandbox.payfast.co.za/eng/process';
  },
  
  get validateUrl() {
    return this.mode === 'live'
      ? 'https://www.payfast.co.za/eng/query/validate'
      : 'https://sandbox.payfast.co.za/eng/query/validate';
  }
};
```

### Signature Generation

```typescript
// src/lib/payfast/signature.ts

import crypto from 'crypto';

export function generateSignature(data: Record<string, any>, passphrase: string = ''): string {
  // Create parameter string
  let pfOutput = '';
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] !== '') {
        pfOutput += `${key}=${encodeURIComponent(data[key].toString().trim()).replace(/%20/g, '+')}&`;
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  
  // Add passphrase if provided
  if (passphrase) {
    getString += `&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, '+')}`;
  }

  // Generate MD5 hash
  return crypto.createHash('md5').update(getString).digest('hex');
}
```

### Payment Data Builder

```typescript
// src/lib/payfast/payment.ts

import { payfastConfig } from './config';
import { generateSignature } from './signature';

export interface PayFastPaymentData {
  // Merchant details
  merchant_id: string;
  merchant_key: string;
  
  // Transaction details
  amount: string;
  item_name: string;
  item_description?: string;
  
  // URLs
  return_url: string;
  cancel_url: string;
  notify_url: string;
  
  // Customer details
  name_first?: string;
  name_last?: string;
  email_address: string;
  cell_number?: string;
  
  // Custom fields
  custom_str1?: string; // Order ID
  custom_str2?: string; // User ID
  custom_str3?: string; // Currency
  custom_int1?: number; // Additional data
  
  // Generated
  signature?: string;
}

export function buildPaymentData(order: {
  orderNumber: string;
  userId: string;
  total: number;
  currency: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  items: Array<{ name: string; quantity: number }>;
}): PayFastPaymentData {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  
  // Build item description
  const itemDescription = order.items
    .map(item => `${item.name} (${item.quantity})`)
    .join(', ');
  
  const data: PayFastPaymentData = {
    // Merchant details
    merchant_id: payfastConfig.merchantId,
    merchant_key: payfastConfig.merchantKey,
    
    // Transaction details
    amount: order.total.toFixed(2),
    item_name: `Open Chats Order #${order.orderNumber}`,
    item_description: itemDescription,
    
    // URLs
    return_url: `${baseUrl}/order/success?order=${order.orderNumber}`,
    cancel_url: `${baseUrl}/checkout`,
    notify_url: `${baseUrl}/api/webhooks/payfast`,
    
    // Customer details
    name_first: order.customer.firstName,
    name_last: order.customer.lastName,
    email_address: order.customer.email,
    cell_number: order.customer.phone,
    
    // Custom fields
    custom_str1: order.orderNumber,
    custom_str2: order.userId,
    custom_str3: order.currency,
  };
  
  // Generate signature
  data.signature = generateSignature(data, payfastConfig.passphrase);
  
  return data;
}
```

---

## API Routes

### Create Payment

```typescript
// src/app/api/checkout/payfast/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/lib/db/mongodb';
import Order from '@/lib/db/models/Order';
import { buildPaymentData } from '@/lib/payfast/payment';
import { payfastConfig } from '@/lib/payfast/config';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const body = await request.json();
    const { orderId } = body;
    
    // Get order from database
    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    
    // Build PayFast payment data
    const paymentData = buildPaymentData({
      orderNumber: order.orderNumber,
      userId: order.userId.toString(),
      total: order.total,
      currency: order.currency,
      customer: order.customer,
      items: order.items,
    });
    
    // Return payment data and URL
    return NextResponse.json({
      paymentUrl: payfastConfig.payfastUrl,
      paymentData,
    });
    
  } catch (error) {
    console.error('PayFast payment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
```

### ITN (Instant Transaction Notification) Handler

```typescript
// src/app/api/webhooks/payfast/route.ts

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/db/mongodb';
import Order from '@/lib/db/models/Order';
import { payfastConfig } from '@/lib/payfast/config';
import { generateSignature } from '@/lib/payfast/signature';
import { sendOrderConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Get POST data
    const formData = await request.formData();
    const data: Record<string, string> = {};
    
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    
    console.log('PayFast ITN received:', data);
    
    // 1. Verify signature
    const signature = data.signature;
    delete data.signature;
    
    const calculatedSignature = generateSignature(data, payfastConfig.passphrase);
    
    if (signature !== calculatedSignature) {
      console.error('Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
    
    // 2. Verify payment status
    if (data.payment_status !== 'COMPLETE') {
      console.log('Payment not complete:', data.payment_status);
      return NextResponse.json({ status: 'pending' });
    }
    
    // 3. Verify amount
    await connectDB();
    
    const orderNumber = data.custom_str1;
    const order = await Order.findOne({ orderNumber });
    
    if (!order) {
      console.error('Order not found:', orderNumber);
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    
    const amountGross = parseFloat(data.amount_gross);
    if (Math.abs(amountGross - order.total) > 0.01) {
      console.error('Amount mismatch:', { received: amountGross, expected: order.total });
      return NextResponse.json({ error: 'Amount mismatch' }, { status: 400 });
    }
    
    // 4. Update order
    order.paymentStatus = 'paid';
    order.payfastPaymentId = data.pf_payment_id;
    order.fulfillmentStatus = 'pending';
    await order.save();
    
    // 5. Send confirmation email
    await sendOrderConfirmation(order);
    
    console.log('Order updated successfully:', orderNumber);
    
    return NextResponse.json({ status: 'success' });
    
  } catch (error) {
    console.error('PayFast ITN error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Allow POST without CSRF token (PayFast webhook)
export const dynamic = 'force-dynamic';
```

---

## Frontend Implementation

### Checkout Component

```typescript
// src/components/checkout/PayFastCheckout.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PayFastCheckoutProps {
  orderId: string;
  total: number;
  currency: string;
}

export default function PayFastCheckout({ orderId, total, currency }: PayFastCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Create PayFast payment
      const response = await fetch('/api/checkout/payfast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      });
      
      const { paymentUrl, paymentData } = await response.json();
      
      // Create form and submit to PayFast
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = paymentUrl;
      
      Object.keys(paymentData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
    } catch (error) {
      console.error('Payment error:', error);
      setLoading(false);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">🇿🇦 Pay with PayFast</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Secure payment via PayFast. Supports all SA banks, cards, and Instant EFT.
        </p>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
        <span className="font-semibold">Total:</span>
        <span className="text-2xl font-bold">
          {currency === 'ZAR' ? 'R' : currency} {total.toFixed(2)}
        </span>
      </div>
      
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full btn-primary"
      >
        {loading ? 'Processing...' : 'Pay with PayFast'}
      </button>
      
      <div className="flex items-center justify-center gap-4 text-xs text-neutral-500">
        <span>🔒 Secure Payment</span>
        <span>•</span>
        <span>PCI DSS Compliant</span>
      </div>
    </div>
  );
}
```

---

## Testing

### Sandbox Mode

PayFast provides a sandbox environment for testing:

**Sandbox URL:** https://sandbox.payfast.co.za

**Test Card Details:**
- Card Number: 4000 0000 0000 0002
- CVV: Any 3 digits
- Expiry: Any future date

**Test Bank Details:**
- Use any SA bank
- Username: `sbtu01@payfast.co.za`
- Password: `clientpass`

### Testing Checklist

- [ ] Payment form submits correctly
- [ ] Redirects to PayFast sandbox
- [ ] Can complete test payment
- [ ] ITN webhook receives notification
- [ ] Order status updates to 'paid'
- [ ] Confirmation email sent
- [ ] Return URL redirects correctly
- [ ] Cancel URL works
- [ ] Signature validation works
- [ ] Amount validation works

---

## Security Best Practices

### 1. Signature Verification
Always verify the signature on ITN notifications:

```typescript
const isValid = signature === generateSignature(data, passphrase);
if (!isValid) {
  return error('Invalid signature');
}
```

### 2. Amount Verification
Always verify the amount matches your order:

```typescript
if (Math.abs(receivedAmount - orderAmount) > 0.01) {
  return error('Amount mismatch');
}
```

### 3. IP Whitelisting (Optional)
PayFast ITN comes from specific IPs. You can whitelist:
- 197.97.145.144
- 41.74.179.194
- 41.74.179.195
- 41.74.179.196
- 41.74.179.197

### 4. HTTPS Only
Always use HTTPS for notify_url in production.

### 5. Passphrase
Use a strong, unique passphrase and keep it secret.

---

## Multi-Currency Support

### Currency Detection

```typescript
// src/lib/utils/currency.ts

export function detectCurrency(country?: string): 'ZAR' | 'USD' | 'EUR' | 'GBP' {
  if (country === 'ZA' || country === 'South Africa') {
    return 'ZAR';
  }
  // Default to USD for international
  return 'USD';
}

export function getPaymentGateway(currency: string): 'payfast' | 'stripe' {
  return currency === 'ZAR' ? 'payfast' : 'stripe';
}
```

### Price Display

```typescript
// src/components/PriceDisplay.tsx

interface PriceDisplayProps {
  zarPrice: number;
  currency: 'ZAR' | 'USD' | 'EUR' | 'GBP';
}

export default function PriceDisplay({ zarPrice, currency }: PriceDisplayProps) {
  const rates = {
    ZAR: 1,
    USD: 0.054,
    EUR: 0.049,
    GBP: 0.042,
  };
  
  const price = zarPrice * rates[currency];
  const symbol = currency === 'ZAR' ? 'R' : currency;
  
  return (
    <span className="font-bold">
      {symbol} {price.toFixed(2)}
    </span>
  );
}
```

---

## Error Handling

### Common Errors

**1. Invalid Signature**
- Check passphrase matches
- Ensure no extra spaces in data
- Verify encoding is correct

**2. Amount Mismatch**
- Check for rounding errors
- Verify VAT calculation
- Use `toFixed(2)` for amounts

**3. ITN Not Received**
- Check notify_url is accessible
- Verify HTTPS in production
- Check firewall settings
- Test with PayFast's ITN tester

**4. Payment Cancelled**
- Handle cancel_url gracefully
- Don't mark order as failed immediately
- Allow user to retry

---

## Going Live

### Pre-Launch Checklist

- [ ] FICA verification complete
- [ ] Merchant account approved
- [ ] Live credentials obtained
- [ ] Change `PAYFAST_MODE` to 'live'
- [ ] Test with real card (small amount)
- [ ] Verify ITN works in production
- [ ] Set up monitoring/alerts
- [ ] Document support process

### Production Configuration

```bash
# .env.production

PAYFAST_MERCHANT_ID=your-live-merchant-id
PAYFAST_MERCHANT_KEY=your-live-merchant-key
PAYFAST_PASSPHRASE=your-secure-passphrase
PAYFAST_MODE=live

NEXT_PUBLIC_BASE_URL=https://openchats.co.za
```

---

## Support & Resources

### PayFast Resources
- **Documentation:** https://developers.payfast.co.za
- **Support:** support@payfast.co.za
- **Phone:** 0861 729 327
- **ITN Tester:** https://sandbox.payfast.co.za/eng/process/itn_tester

### Monitoring
- Set up alerts for failed payments
- Monitor ITN webhook logs
- Track payment success rate
- Review failed transactions daily

---

## Cost Comparison

### PayFast (South Africa)
- **Transaction Fee:** 2.9% + R2.00
- **Monthly Fee:** R0 (pay-as-you-go)
- **Setup Fee:** R0
- **Example:** R1,000 order = R31 fee (3.1%)

### Stripe (International)
- **Transaction Fee:** 2.9% + $0.30 + 1% currency conversion
- **Monthly Fee:** $0
- **Setup Fee:** $0
- **Example:** $54 order (R1,000) = ~$2.50 fee (4.6%)

**Savings:** ~30-40% lower fees for SA customers using PayFast

---

*This guide covers the complete PayFast integration for Open Chats. For additional support, contact PayFast directly or refer to their developer documentation.*
