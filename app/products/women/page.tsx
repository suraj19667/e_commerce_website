import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function WomenProductsPage() {
  const womenProducts = products.filter(product => product.category === 'women');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Women&apos;s Collection</h1>
          <p className="text-lg text-gray-600">
            Explore our beautiful women&apos;s fashion collection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

