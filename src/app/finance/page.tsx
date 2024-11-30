import Image from 'next/image'
import bg from '@/assets/images/farm research .jpg'

export default function FinancialSupport() {

  return (
    <div className="min-h-screen flex flex-col px-32">

      <main className="flex-grow">
        <section className="relative h-[400px]">
          <Image src={bg} alt="Financial Support Hero" layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Financial Support for Farmers</h1>
            <p className="text-xl mb-8 max-w-2xl">Access grants, loans, and resources to support your farming journey and boost your success</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Financial Literacy Workshop</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-8">
                Join our upcoming workshop to learn about financial management, budgeting, and how to access financial resources for your farm.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Next Workshop</h3>
                <p className="text-gray-600">Date: July 15, 2023</p>
                <p className="text-gray-600">Time: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Location: Women Farm Connect Center, Freetown</p>
              </div>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                Register for Workshop
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

