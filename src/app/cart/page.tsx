import CartItems from '@/components/features/cart/CartItems';
import CartSummary from '@/components/features/cart/CartSummary';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-8">
          SHOPPING CART
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}