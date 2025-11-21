import ProductGallery from '@/components/features/shop/ProductGallery';
import ProductInfo from '@/components/features/shop/ProductInfo';
import ProductTabs from '@/components/features/shop/ProductTabs';
import RelatedProducts from '@/components/features/shop/RelatedProducts';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // Mock product data - would come from API
  const product = {
    id: parseInt(params.id),
    name: 'OPENCHATS OVER EVERYTHING TEE',
    price: 350,
    currency: 'ZAR',
    images: [
      '/merch/product1.jpg',
      '/merch/product2.jpg',
      '/merch/product3.jpg',
    ],
    badge: 'SELLING FAST',
    badgeColor: 'orange' as const,
    specs: ['HEAVYWEIGHT COTTON', 'GSM: 240'],
    description: 'Wear the controversy. No refunds if your feelings get hurt.',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Orange'],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    features: [
      'Premium heavyweight cotton (240 GSM)',
      'Screen-printed logo on front',
      'Ribbed crew neck',
      'Pre-shrunk fabric',
      'Unisex fit',
    ],
    sizeGuide: {
      'S': { chest: '46cm', length: '66cm' },
      'M': { chest: '51cm', length: '69cm' },
      'L': { chest: '56cm', length: '72cm' },
      'XL': { chest: '61cm', length: '75cm' },
      'XXL': { chest: '66cm', length: '78cm' },
    },
  };

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-muted mb-6">
          <a href="/shop" className="hover:text-spicy-orange">Shop</a>
          <span className="mx-2">&gt;</span>
          <span>{product.category}</span>
          <span className="mx-2">&gt;</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}