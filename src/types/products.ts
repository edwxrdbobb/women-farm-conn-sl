import { StaticImageData } from 'next/image'

export interface Product {
  id: string
  name: string
  price: string
  image: StaticImageData
  category: 'Fruits' | 'Vegetables' | 'Local Content Products'
}

export interface PaymentFormData {
  fullName: string
  email: string
  deliveryAddress: string
  phoneNumber: string
  pin: string
  otpCode: string
}

