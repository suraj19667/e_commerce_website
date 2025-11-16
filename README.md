# StyleAura - E-commerce Website

A modern, responsive e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful UI showcasing men's and women's clothing collections.

## Features

- �️ **Product Catalog**: Browse men's and women's clothing collections
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI**: Clean and attractive design with smooth animations
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal performance
- 🔍 **Product Details**: Individual product pages with detailed information
- 🏷️ **Sale Badges**: Highlight discounted products

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── products/
│   │   ├── [id]/          # Individual product pages
│   │   ├── men/           # Men's collection
│   │   ├── women/         # Women's collection
│   │   └── page.tsx       # All products
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── ProductCard.tsx   # Product card component
│   └── Footer.tsx        # Footer component
└── data/
    └── products.ts       # Product data
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Image**: Optimized image loading

## Pages

- **Home** (`/`): Hero section with featured products
- **All Products** (`/products`): Complete product catalog
- **Men's Collection** (`/products/men`): Men's clothing
- **Women's Collection** (`/products/women`): Women's clothing
- **Product Detail** (`/products/[id]`): Individual product page

## Customization

To add more products, edit `data/products.ts` and add new product objects following the existing structure.

## License

This project is open source and available for personal and commercial use.
