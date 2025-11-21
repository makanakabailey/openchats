import ShopHero from '@/components/features/shop/ShopHero';
import LimitedDropBanner from '@/components/features/shop/LimitedDropBanner';
import FeaturedProducts from '@/components/features/shop/FeaturedProducts';
import ProductsGrid from '@/components/features/shop/ProductsGrid';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-studio-black">
      <ShopHero />
      <LimitedDropBanner />
      <FeaturedProducts />
      <ProductsGrid />
    </div>
  );
}