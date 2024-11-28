import Image from 'next/image'
import Link from 'next/link'

interface Product {
  name: string
  price: string
  image: string
  category: 'Fruits' | 'Vegetables' | 'Local Content Products'
}

const products: Product[] = [
  // Fruits
  { name: 'Banana', price: 'Nle80.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Orange', price: 'Nle120.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Papaya', price: 'Nle150.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Lemon', price: 'Nle100.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Avocado', price: 'Nle200.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Grapes', price: 'Nle250.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  { name: 'Watermelon', price: 'Nle300.00', image: '/placeholder.svg?height=200&width=200', category: 'Fruits' },
  
  // Vegetables
  { name: 'Carrots', price: 'Nle100.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Cabbage', price: 'Nle150.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Pepper', price: 'Nle80.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Mixed Vegetables', price: 'Nle200.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Cucumber', price: 'Nle120.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Onions', price: 'Nle100.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  { name: 'Green Peas', price: 'Nle150.00', image: '/placeholder.svg?height=200&width=200', category: 'Vegetables' },
  
  // Local Content Products
  { name: 'Sweet Potato Flour', price: 'Nle500.00', image: '/placeholder.svg?height=200&width=200', category: 'Local Content Products' },
  { name: 'Cassava Leaves', price: 'Nle150.00', image: '/placeholder.svg?height=200&width=200', category: 'Local Content Products' },
  { name: 'Coconut Oil', price: 'Nle300.00', image: '/placeholder.svg?height=200&width=200', category: 'Local Content Products' },
  { name: 'Palm Fish', price: 'Nle400.00', image: '/placeholder.svg?height=200&width=200', category: 'Local Content Products' }
]

export default function MarketAccess() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-green-700 h-[300px]">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Market hero"
            width={1920}
            height={300}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Explore Our Market</h1>
              <p className="text-xl text-white">Browse fresh produce from local female farmers</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {['Fruits', 'Vegetables', 'Local Content Products'].map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="mt-4">
                          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                          <p className="text-gray-600">{product.price}</p>
                          <Link
                            href={`/view-product?name=${encodeURIComponent(product.name)}&image=${encodeURIComponent(product.image)}&price=${encodeURIComponent(product.price)}`}
                            className="mt-4 block w-full bg-yellow-500 text-white text-center py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
