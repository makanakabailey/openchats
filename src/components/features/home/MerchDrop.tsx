import ProductCard from '@/components/ui/ProductCard';

export default function MerchDrop() {
  // Real product data with actual images
  const products = [
    {
      id: 1,
      name: 'OPENCHATS OVER EVERYTHING TEE',
      price: 350,
      currency: 'ZAR',
      image: '/merch/product1.jpg',
      badge: 'SELLING FAST',
      badgeColor: 'orange',
      specs: ['HEAVYWEIGHT COTTON', 'GSM: 240'],
      description: 'Wear the controversy. No refunds if your feelings get hurt.',
    },
    {
      id: 2,
      name: 'OPEN CHATS OPERATOR HOODIE',
      price: 650,
      currency: 'ZAR',
      image: '/merch/product2.jpg',
      badge: 'NEW DROP',
      badgeColor: 'white',
      specs: ['PUFF PRINT LOGO', 'GSM: 400'],
      description: 'Studio warm. Essential for late-night spacing out.',
    },
    {
      id: 3,
      name: 'DON\'T CALL ME CAP',
      price: 250,
      currency: 'ZAR',
      image: '/merch/product3.jpg',
      badge: 'LOW STOCK',
      badgeColor: 'red',
      specs: ['ADJUSTABLE SNAPBACK', 'ONE SIZE'],
      description: 'Hide your eyes from the haters.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-card-dark">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-12 text-center">
          THE MERCH DROP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
