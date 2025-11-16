import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import BestSellers from '@/components/BestSellers';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <BestSellers />
    </div>
  );
}
