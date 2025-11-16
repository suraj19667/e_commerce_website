'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Categories() {
  const categories = [
    {
      name: 'Men',
      href: '/products/men',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80',
      description: 'Explore men\'s fashion'
    },
    {
      name: 'Women',
      href: '/products/women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
      description: 'Discover women\'s collection'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find your perfect style in our curated collections
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-96">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-lg opacity-90 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {category.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                    Shop Now
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
