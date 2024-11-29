'use client'

import { useState } from 'react'

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    deliveryAddress: '',
    phoneNumber: '',
    pin: '',
    otpCode: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission
    console.log('Payment submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-green-800">Complete Your Orange Money Purchase</h2>
      </div>
      
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="text"
        placeholder="Delivery Address"
        value={formData.deliveryAddress}
        onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="text"
        placeholder="Orange Money Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="password"
        placeholder="PIN"
        value={formData.pin}
        onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <div>
        <h3 className="text-center mb-2">OTP Validator</h3>
        <input
          type="text"
          placeholder="OTP CODE"
          value={formData.otpCode}
          onChange={(e) => setFormData({ ...formData, otpCode: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-green-700 hover:bg-green-800 text-white p-2 rounded-md"
      >
        Complete Payment
      </button>
    </form>
  )
}

