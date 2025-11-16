export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women' | 'kids' | 'living' | 'beauty';
  description: string;
  sizes?: string[];
  colors?: string[];
}

const menProducts: Product[] = [
  // Men's Products
  {
    id: 'm1',
    name: 'Classic White T-Shirt',
    price: 2000,
    originalPrice: 797,
    image: '/images/elegant-young-handsome-man.jpg',
    category: 'men',
    description: 'Premium cotton t-shirt with perfect fit',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy']
  },
  {
    id: 'm2',
    name: 'Slim Fit Denim Jeans',
    price: 1499,
    originalPrice: 190,
    image: '/images/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall.jpg',
    category: 'men',
    description: 'Comfortable slim fit jeans with stretch',
    sizes: ['30', '32', '34', '36'],
    colors: ['Blue', 'Black']
  },
  {
    id: 'm3',
    name: 'Casual Button-Down Shirt',
    price: 90,
    image: '/images/young-handsome-hipster-man-standing.jpg',
    category: 'men',
    description: 'Versatile button-down shirt for any occasion',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White', 'Gray']
  },
  {
    id: 'm4',
    name: 'Hooded Sweatshirt',
    price: 100,
    originalPrice: 130,
    image: '/images/pexels-jmendezrf-1536619.jpg',
    category: 'men',
    description: 'Cozy hoodie perfect for casual wear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy']
  },
  {
    id: 'm5',
    name: 'Chino Pants',
    price: 120,
    image: '/images/pexels-luiz-gustavo-miertschink-925274-1877736.jpg',
    category: 'men',
    description: 'Classic chino pants for smart casual look',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive']
  },
  {
    id: 'm6',
    name: 'Leather Jacket',
    price: 350,
    originalPrice: 450,
    image: '/images/pexels-jibarofoto-16069737.jpg',
    category: 'men',
    description: 'Genuine leather jacket with modern design',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown']
  }
];

const womenProducts: Product[] = [
  // Women's Products
  {
    id: 'w1',
    name: 'Floral Summer Dress',
    price: 100,
    originalPrice: 130,
    image: '/images/pexels-anastasiya-gepp-654466-1462637.jpg',
    category: 'women',
    description: 'Beautiful floral dress perfect for summer',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral', 'Blue', 'Pink']
  },
  {
    id: 'w2',
    name: 'High-Waist Skinny Jeans',
    price: 120,
    originalPrice: 150,
    image: '/images/pexels-olenagoldman-1021693.jpg',
    category: 'women',
    description: 'Comfortable high-waist jeans with stretch',
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Blue', 'Black', 'White']
  },
  {
    id: 'w3',
    name: 'Elegant Blouse',
    price: 80,
    image: '/images/pexels-maryiaplashchynskaya-3792124.jpg',
    category: 'women',
    description: 'Sophisticated blouse for office or evening',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Navy', 'Pink']
  },
  {
    id: 'w4',
    name: 'Knit Sweater',
    price: 95,
    originalPrice: 125,
    image: '/images/pexels-weezy-mie-276311990-12928822.jpg',
    category: 'women',
    description: 'Warm and cozy knit sweater',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Pink', 'Navy']
  },
  {
    id: 'w5',
    name: 'Midi Skirt',
    price: 70,
    image: '/images/pexels-anastasiya-gepp-654466-1462637.jpg',
    category: 'women',
    description: 'Classic midi skirt for any occasion',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Beige', 'Red']
  },
  {
    id: 'w6',
    name: 'Trench Coat',
    price: 250,
    originalPrice: 350,
    image: '/images/pexels-olenagoldman-1021693.jpg',
    category: 'women',
    description: 'Timeless trench coat for all seasons',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Beige', 'Black', 'Navy']
  },
  {
    id: 'w7',
    name: 'Casual T-Shirt',
    price: 50,
    originalPrice: 70,
    image: '/images/pexels-maryiaplashchynskaya-3792124.jpg',
    category: 'women',
    description: 'Comfortable everyday t-shirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray', 'Pink']
  },
  {
    id: 'w8',
    name: 'Denim Jacket',
    price: 110,
    image: '/images/pexels-weezy-mie-276311990-12928822.jpg',
    category: 'women',
    description: 'Classic denim jacket with modern fit',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blue', 'Black', 'White']
  }
];

// Add these kids products to your products array
const kidsProducts: Product[] = [
  {
    id: 'kids-1',
    name: 'Kids Casual T-Shirt',
    description: 'Comfortable cotton t-shirt for kids with fun graphics',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-2',
    name: 'Kids Denim Jeans',
    description: 'Durable denim jeans perfect for active kids',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-3',
    name: 'Kids Summer Dress',
    description: 'Colorful and comfortable summer dress for girls',
    price: 799,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-4',
    name: 'Kids Hoodie',
    description: 'Warm and cozy hoodie for boys and girls',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-5',
    name: 'Kids Sports Shorts',
    description: 'Breathable sports shorts for active playtime',
    price: 399,
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-6',
    name: 'Kids Party Dress',
    description: 'Elegant party dress for special occasions',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-7',
    name: 'Kids Casual Shirt',
    description: 'Smart casual shirt for everyday wear',
    price: 499,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    category: 'kids',
  },
  {
    id: 'kids-8',
    name: 'Kids Winter Jacket',
    description: 'Warm winter jacket to keep kids cozy',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e3?w=800&q=80',
    category: 'kids',
  }
];

// Add these living products to your products array
const livingProducts: Product[] = [
  {
    id: 'living-1',
    name: 'Modern Table Lamp',
    description: 'Elegant table lamp with adjustable brightness',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-2',
    name: 'Decorative Cushion Set',
    description: 'Set of 4 premium cushion covers with modern patterns',
    price: 899,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-3',
    name: 'Wall Art Canvas',
    description: 'Beautiful abstract canvas art for living room',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-4',
    name: 'Ceramic Vase',
    description: 'Handcrafted ceramic vase for flowers',
    price: 799,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-5',
    name: 'Throw Blanket',
    description: 'Cozy knitted throw blanket for sofa',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-6',
    name: 'Wall Mirror',
    description: 'Round decorative wall mirror with metal frame',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-7',
    name: 'Plant Pot Set',
    description: 'Set of 3 ceramic plant pots in different sizes',
    price: 699,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    category: 'living',
  },
  {
    id: 'living-8',
    name: 'Scented Candles Set',
    description: 'Premium scented candles for aromatherapy',
    price: 599,
    image: 'https://images.unsplash.com/photo-1602874801006-95efec142e5d?w=800&q=80',
    category: 'living',
  },
];

// Add these beauty products to your products array
const beautyProducts: Product[] = [
  {
    id: 'beauty-1',
    name: 'Hydrating Face Serum',
    description: 'Vitamin C enriched serum for glowing skin',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-2',
    name: 'Matte Lipstick Set',
    description: 'Long-lasting matte lipstick in 5 shades',
    price: 899,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-3',
    name: 'Natural Face Cream',
    description: 'Moisturizing face cream with SPF 30',
    price: 999,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-4',
    name: 'Eye Shadow Palette',
    description: '12 color eye shadow palette for all occasions',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-5',
    name: 'Perfume Collection',
    description: 'Premium fragrance set for women',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-6',
    name: 'Hair Care Kit',
    description: 'Complete hair care set with shampoo and conditioner',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-7',
    name: 'Makeup Brush Set',
    description: 'Professional 10-piece makeup brush set',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    category: 'beauty',
  },
  {
    id: 'beauty-8',
    name: 'Nail Polish Collection',
    description: 'Set of 8 trendy nail polish colors',
    price: 699,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80',
    category: 'beauty',
  },
];

// Combine all products into one array
export const products: Product[] = [
  ...menProducts,
  ...womenProducts,
  ...kidsProducts,
  ...livingProducts,
  ...beautyProducts,
];

