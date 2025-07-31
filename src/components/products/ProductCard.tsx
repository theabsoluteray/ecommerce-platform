'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Product } from '@/lib/supabase'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/stripe'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore(state => state.addItem)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Wishlist Button */}
      <button className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
        <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
      </button>

      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>
          
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>

        {/* Stock Status */}
        {product.stock <= 0 ? (
          <p className="text-xs text-red-500 mt-2">Out of Stock</p>
        ) : product.stock < 10 ? (
          <p className="text-xs text-orange-500 mt-2">Only {product.stock} left</p>
        ) : null}
      </div>
    </motion.div>
  )
} 