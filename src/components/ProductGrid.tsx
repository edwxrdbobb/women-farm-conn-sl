import Link from 'next/link'
import Image from 'next/image'
import { products, groupProductsByCategory } from '@/data/products'

export default function ProductGrid() {
  const groupedProducts = groupProductsByCategory(products)

  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="my-16">
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/market/product/${product.id}`}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-lg font-medium mt-2 text-green-800">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

