'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { products } from '@/data/products'
import PaymentForm from '@/components/CheckoutForm'
import { StaticImageData } from 'next/image'
import SmoothScroll from '@/components/SmoothScroll'

interface Product {
  id: string
  name: string
  price: string
  image: string | StaticImageData
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id)
    setProduct(foundProduct || null)
  }, [id])

  if (!product) return <div className="container mx-auto px-4 py-8 text-center">Product not found</div>

  const price = parseFloat(product.price.replace('Nle', ''))
  const total = price * quantity

  return (
    <>
      <SmoothScroll />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-800 mb-4">{product.name}</h1>
                <p className="text-xl mb-6">{product.price}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1))}
                    className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                <div className="text-xl font-bold mb-6">
                  Total: Nle {total.toFixed(2)}
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setPaymentMethod('qmoney')
                      setShowPaymentForm(true)
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition duration-300"
                  >
                    Pay with QMoney
                  </button>
                  {/* Uncomment these buttons when ready to implement
                  <button
                    onClick={() => {
                      setPaymentMethod('orange')
                      setShowPaymentForm(true)
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition duration-300"
                  >
                    Pay with Orange Money
                  </button>
                  <button
                    onClick={() => {
                      setPaymentMethod('afri')
                      setShowPaymentForm(true)
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition duration-300"
                  >
                    Pay with AfriMoney
                  </button>
                  */}
                </div>
              </div>
            </div>
          </div>

          {showPaymentForm && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <PaymentForm paymentMethod={paymentMethod || ''} />
            </div>
          )}

          <Link href="/" className="inline-block">
            <button className="bg-green-700 text-white hover:bg-green-800 p-2 rounded-md transition duration-300">
              Back to Market
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

