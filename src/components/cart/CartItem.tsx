'use client'

import Image from 'next/image'
import { Trash2, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/stripe'
import { motion } from 'framer-motion'

interface CartItemProps {
  product: any
  quantity: number
}

export default function CartItem({ product, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(product.id)
    } else {
      updateQuantity(product.id, newQuantity)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
    >
      {/* Product Image */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 relative rounded-lg overflow-hidden">
          <Image
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(quantity - 1)}
          className="w-8 h-8 p-0"
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="text-sm font-medium text-gray-900 min-w-[2rem] text-center">
          {quantity}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(quantity + 1)}
          className="w-8 h-8 p-0"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">
          {formatPrice(product.price * quantity)}
        </p>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => removeItem(product.id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </motion.div>
  )
} 