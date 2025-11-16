import Link from 'next/link';

export default function CategoriesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/products/men" className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Men&apos;s Collection</h3>
                  <p className="text-lg opacity-90">Shop Now →</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/products/women" className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-[4/3] bg-gradient-to-br from-pink-600 to-pink-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Women&apos;s Collection</h3>
                  <p className="text-lg opacity-90">Shop Now →</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

