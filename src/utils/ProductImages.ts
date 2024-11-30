import { StaticImageData } from 'next/image'

// Import all product images
import Banana from '@/assets/images/banana.jpg'
import Orange from '@/assets/images/Oranges.jpg'
import Papaya from '@/assets/images/papaya.jpg'
import Lemon from '@/assets/images/Lemon.jpg'
import Avocado from '@/assets/images/Avocado.jpg'
import Grapes from '@/assets/images/Grape.jpg'
import Watermelon from '@/assets/images/Watermelon.jpg'
import Carrots from '@/assets/images/Carrot.jpg'
import Cabbage from '@/assets/images/Cabbage.jpg'
import Pepper from '@/assets/images/Pepper.jpg'
import MixedVegetables from '@/assets/images/Mix Veg.jpg'
import Cucumber from '@/assets/images/Cucumber.jpg'
import Onions from '@/assets/images/Onion.jpg'
import GreenPeas from '@/assets/images/pineapples.jpg'
import SweetPotatoFlour from '@/assets/images/potato leaves .jpeg'
import CassavaLeaves from '@/assets/images/Cassava Leaves .png'
import CoconutOil from '@/assets/images/cocnut oil.jpg'
import PalmFish from '@/assets/images/palm Oil.jpeg'
import FoofooFlour from '@/assets/images/fufu-powder.jpg'
// Create an object with all product images
const productImages: { [key: string]: StaticImageData } = {
  Banana,
  Orange,
  Papaya,
  Lemon,
  Avocado,
  Grapes,
  Watermelon,
  Carrots,
  Cabbage,
  Pepper,
  MixedVegetables,
  Cucumber,
  Onions,
  GreenPeas,
  SweetPotatoFlour,
  CassavaLeaves,
  CoconutOil,
  PalmFish,
  FoofooFlour,
}

export default productImages

