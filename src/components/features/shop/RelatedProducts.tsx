import ProductCard from '@/components/ui/ProductCard';

interface RelatedProductsProps {
  currentProductId: number;
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Mock related products data
  const relatedProducts = [
    {
      id: 2,
      name: 'OPERATOR HOODIE',
      price: 650,
      currency: 'ZAR',
      image: '/merch/product2.jpg',
      badge: 'NEW DROP',
      badgeColor: 'white' as const,
      specs: ['PUFF PRINT LOGO', 'GSM: 400'],
      description: 'Studio essential.',
    },
    {
      id: 3,
      name: 'DON\'T CALL ME CAP',
      price: 250,
      currency: 'ZAR',
      image: '/merch/product3.jpg',
      badge: 'LOW STOCK',
      badgeColor: 'red' as const,
      specs: ['ADJUSTABLE SNAPBACK', 'ONE SIZE'],
      description: 'Hide from haters.',
    },
    {
      id: 4,
      name: 'UNFILTERED STICKER PACK',
      price: 95,
      currency: 'ZAR',
      image: '/merch/product1.jpg',
      badge: 'HOT 🔥',
      badgeColor: 'orange' as const,
      specs: ['WATERPROOF', '10 STICKERS'],
      description: 'Rep everywhere.',
    },
  ].filter(product => product.id !== currentProductId);

  return (
    <section>
      <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-8">
        🛍️ You Might Also Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="/shop" className="btn-secondary">
          VIEW ALL PRODUCTS
        </a>
      </div>
    </section>
  );
}