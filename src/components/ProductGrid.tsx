import { StaticImageData } from 'next/image'
import productImages from '@/utils/ProductImages'
import Image from 'next/image'

interface Product {
  name: string
  price: string
  image: StaticImageData
  category: 'Fruits' | 'Vegetables' | 'Local Content Products'
}

const products: Product[] = [
  // Fruits
  { name: 'Banana', price: 'Nle80.00', image: productImages.Banana, category: 'Fruits' },
  { name: 'Orange', price: 'Nle120.00', image: productImages.Orange, category: 'Fruits' },
  { name: 'Papaya', price: 'Nle150.00', image: productImages.Papaya, category: 'Fruits' },
  { name: 'Lemon', price: 'Nle100.00', image: productImages.Lemon, category: 'Fruits' },
  { name: 'Avocado', price: 'Nle200.00', image: productImages.Avocado, category: 'Fruits' },
  { name: 'Grapes', price: 'Nle250.00', image: productImages.Grapes, category: 'Fruits' },
  { name: 'Watermelon', price: 'Nle300.00', image: productImages.Watermelon, category: 'Fruits' },
  
  // Vegetables
  { name: 'Carrots', price: 'Nle100.00', image: productImages.Carrots, category: 'Vegetables' },
  { name: 'Cabbage', price: 'Nle150.00', image: productImages.Cabbage, category: 'Vegetables' },
  { name: 'Pepper', price: 'Nle80.00', image: productImages.Pepper, category: 'Vegetables' },
  { name: 'Mixed Vegetables', price: 'Nle200.00', image: productImages.MixedVegetables, category: 'Vegetables' },
  { name: 'Cucumber', price: 'Nle120.00', image: productImages.Cucumber, category: 'Vegetables' },
  { name: 'Onions', price: 'Nle100.00', image: productImages.Onions, category: 'Vegetables' },
  { name: 'Green Peas', price: 'Nle150.00', image: productImages.GreenPeas, category: 'Vegetables' },
  
  // Local Content Products
  { name: 'Sweet Potato Flour', price: 'Nle500.00', image: productImages.SweetPotatoFlour, category: 'Local Content Products' },
  { name: 'Cassava Leaves', price: 'Nle150.00', image: productImages.CassavaLeaves, category: 'Local Content Products' },
  { name: 'Coconut Oil', price: 'Nle300.00', image: productImages.CoconutOil, category: 'Local Content Products' },
  { name: 'Palm Fish', price: 'Nle400.00', image: productImages.PalmFish, category: 'Local Content Products' }
]

// Group products by category
const groupedProducts = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = []
  }
  acc[product.category].push(product)
  return acc
}, {} as Record<string, Product[]>)

// Example usage in a ProductGrid component
const ProductGrid = () => {
  return (
    <div className="">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="my-16">
          <h2 className="text-xl font-bold mb-4">{category}</h2> {/* Category name */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.name} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-lg font-medium mt-2">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid;