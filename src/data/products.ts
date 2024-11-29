import { StaticImageData } from 'next/image'
import productImages from '@/utils/ProductImages'

interface Product {
  id: string;
  name: string
  price: string
  image: StaticImageData
  category: string
}

export const products: Product[] = [
  // Fruits
  { id: 'banana', name: 'Banana', price: 'Nle80.00', image: productImages.Banana, category: 'Fruits' },
  { id: 'orange', name: 'Orange', price: 'Nle120.00', image: productImages.Orange, category: 'Fruits' },
  { id: 'papaya', name: 'Papaya', price: 'Nle150.00', image: productImages.Papaya, category: 'Fruits' },
  { id: 'lemon', name: 'Lemon', price: 'Nle100.00', image: productImages.Lemon, category: 'Fruits' },
  { id: 'avocado', name: 'Avocado', price: 'Nle200.00', image: productImages.Avocado, category: 'Fruits' },
  { id: 'grapes', name: 'Grapes', price: 'Nle250.00', image: productImages.Grapes, category: 'Fruits' },
  { id: 'watermelon', name: 'Watermelon', price: 'Nle300.00', image: productImages.Watermelon, category: 'Fruits' },
  // Vegetables
  { id: 'carrots', name: 'Carrots', price: 'Nle100.00', image: productImages.Carrots, category: 'Vegetables' },
  { id: 'cabbage', name: 'Cabbage', price: 'Nle150.00', image: productImages.Cabbage, category: 'Vegetables' },
  { id: 'pepper', name: 'Pepper', price: 'Nle80.00', image: productImages.Pepper, category: 'Vegetables' },
  { id: 'mixedVegetables', name: 'Mixed Vegetables', price: 'Nle200.00', image: productImages.MixedVegetables, category: 'Vegetables' },
  { id: 'cucumber', name: 'Cucumber', price: 'Nle120.00', image: productImages.Cucumber, category: 'Vegetables' },
  { id: 'onions', name: 'Onions', price: 'Nle100.00', image: productImages.Onions, category: 'Vegetables' },
  { id: 'greenPeas', name: 'Green Peas', price: 'Nle150.00', image: productImages.GreenPeas, category: 'Vegetables' },
  // Local Content
  { id: 'sweetPotatoFlour', name: 'Sweet Potato Flour', price: 'Nle500.00', image: productImages.SweetPotatoFlour, category: 'Local Content' },
  { id: 'cassavaLeaves', name: 'Cassava Leaves', price: 'Nle150.00', image: productImages.CassavaLeaves, category: 'Local Content' },
  { id: 'coconutOil', name: 'Coconut Oil', price: 'Nle300.00', image: productImages.CoconutOil, category: 'Local Content' },
  { id: 'palmFish', name: 'Palm Fish', price: 'Nle400.00', image: productImages.PalmFish, category: 'Local Content' },
]


export const groupProductsByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, Product[]>)
}

