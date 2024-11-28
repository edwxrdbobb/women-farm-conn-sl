'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function ViewProduct() {
  const searchParams = useSearchParams()
  const [quantity, setQuantity] = useState(1)
  const [showPaymentForm, setShowPaymentForm] = useState<'qmoney' | 'orange' | 'afrimoney' | null>(null)
  
  const name = searchParams.get('name') || 'Product'
  const image = searchParams.get('image') || '/placeholder.svg?height=400&width=400'
  const price = searchParams.get('price') || 'Nle0.00'
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''))
  
  const total = numericPrice * quantity

  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
            <p className="text-2xl text-gray-600 mb-6">{price}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-xl"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-xl"
              >
                +
              </button>
            </div>
            
            <p className="text-xl font-bold mb-6">Total: Nle {total.toFixed(2)}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setShowPaymentForm('qmoney')}
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Pay with QMoney
              </button>
              <button
                onClick={() => setShowPaymentForm('orange')}
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Pay with Orange Money
              </button>
              <button
                onClick={() => setShowPaymentForm('afrimoney')}
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Pay with AfriMoney
              </button>
            </div>
          </div>
        </div>

        {showPaymentForm && (
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">
                Complete Your {showPaymentForm === 'orange' ? 'Orange Money' : showPaymentForm === 'qmoney' ? 'QMoney' : 'AfriMoney'} Purchase
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="pin" className="block text-sm font-medium text-gray-700">PIN</label>
                  <input
                    type="password"
                    id="pin"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP Code</label>
                  <input
                    type="text"
                    id="otp"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Complete Payment
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/market-access"
            className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Market
          </Link>
        </div>
      </div>
    </>
  )
}
