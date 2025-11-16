import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="text-gray-600 hover:text-gray-900 mb-6 inline-block"
        >
          ← Back to Products
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold capitalize">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{product.originalPrice.toFixed(2)}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-sm font-semibold">
                        Save ₹{(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              {product.sizes && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

