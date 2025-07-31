import Link from 'next/link'
import * as Lucide from 'lucide-react'
import { ArrowRight, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react'

import { motion } from 'framer-motion'

// Featured Products
const featuredProducts = [
  { id: '1', name: 'Premium Wireless Headphones', price: 2499, rating: 4.8, reviews: 124 },
  { id: '2', name: 'Smart Fitness Watch', price: 3999, rating: 4.6, reviews: 89 },
  { id: '3', name: 'Organic Cotton T-Shirt', price: 899, rating: 4.9, reviews: 256 },
  { id: '4', name: 'Designer Sunglasses', price: 1599, rating: 4.7, reviews: 67 }
]

// Categories
const categories = [
  { name: 'Electronics', icon: '📱', count: 150 },
  { name: 'Fashion', icon: '👕', count: 200 },
  { name: 'Home & Living', icon: '🏠', count: 120 },
  { name: 'Sports', icon: '⚽', count: 80 },
  { name: 'Beauty', icon: '💄', count: 95 },
  { name: 'Books', icon: '📚', count: 300 }
]

// Features
const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on orders above ₹999'
  },
  {
    icon: ShieldCheck, // ✅ Corrected
    title: 'Secure Payment',
    description: '100% secure payment processing'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy'
  }
]


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Your <span className="block text-yellow-300">Perfect Style</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Explore our curated collection of premium products designed to elevate your lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-white text-purple-600 hover:bg-gray-100">
                  Shop Now <Lucide.ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white text-white hover:bg-white hover:text-purple-600">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-square bg-white/20 rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link href={`/products?category=${category.name.toLowerCase()}`}>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} items</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular and trending products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <div className="flex items-center">
                      <Lucide.Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">({product.reviews} reviews)</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <button className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-purple-600 text-white hover:bg-purple-700">
                View All Products <Lucide.ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
