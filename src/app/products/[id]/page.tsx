'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, Truck, Shield, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/stripe'
import { motion } from 'framer-motion'

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions. Perfect for music lovers, professionals, and anyone who appreciates high-quality audio.',
  price: 2499,
  images: ['/placeholder-product.jpg', '/placeholder-product.jpg', '/placeholder-product.jpg'],
  category: 'Electronics',
  stock: 15,
  rating: 4.8,
  reviews: 124,
  features: [
    'Active Noise Cancellation',
    '30-hour Battery Life',
    'Premium Comfort Design',
    'Bluetooth 5.0',
    'Touch Controls'
  ],
  specifications: {
    'Brand': 'Gradient Audio',
    'Model': 'WH-1000XM4',
    'Connectivity': 'Bluetooth 5.0',
    'Battery Life': '30 hours',
    'Weight': '254g',
    'Warranty': '2 years'
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    addToCart(mockProduct, quantity)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square relative overflow-hidden rounded-lg bg-white"
            >
              <Image
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 relative overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${mockProduct.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {mockProduct.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(mockProduct.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {mockProduct.rating} ({mockProduct.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                {formatPrice(mockProduct.price)}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {mockProduct.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {mockProduct.stock > 0 ? (
                  <span className="text-green-600 font-medium">
                    In Stock ({mockProduct.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-gray-600 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  disabled={mockProduct.stock === 0}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {mockProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-purple-500 text-purple-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                Description
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                Specifications
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(mockProduct.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping & Returns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Truck className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <h4 className="font-medium text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <h4 className="font-medium text-gray-900">Secure Payment</h4>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center">
              <RefreshCw className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <h4 className="font-medium text-gray-900">Easy Returns</h4>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 