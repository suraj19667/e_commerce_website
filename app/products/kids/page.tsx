import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function KidsPage() {
  const kidsProducts = products.filter((product) => product.category === 'kids');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kids Collection</h1>
          <p className="text-lg text-gray-600">
            Comfortable and stylish clothing for your little ones
          </p>
        </div>
        
        {kidsProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No kids products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
