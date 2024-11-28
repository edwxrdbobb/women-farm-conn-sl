import Image from 'next/image'
import Link from 'next/link'
import bg from '@/assets/images/farm research .jpg'
import img1 from '@/assets/images/funding 3.png'
import img2 from '@/assets/images/fundings.png'
import img3 from '@/assets/images/funding 2.png'


export default function FinancialSupport() {
  const grants = [
    { title: 'Sierra Leone Agricultural Fund', description: 'Government grant to boost food production', image: img1},
    { title: 'Salone Access to Finance', description: 'Project to empower over 500,000 Farmers', image: img2 },
    { title: 'Adaptation Fund', description: 'Climate resilience in Cocoa and Rice sectors', image: img3 },
  ]

  return (
    <div className="min-h-screen flex flex-col px-32">
      <header className="bg-white shadow-sm">
        {/* Header content (same as home page) */}
      </header>

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
            <h2 className="text-3xl font-bold text-center mb-12">Government Grants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {grants.map((grant, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={grant.image} alt={grant.title} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
                    <p className="text-gray-600 mb-4">{grant.description}</p>
                    <Link href={`/grant/${grant.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-500 hover:text-green-600">Read more...</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Private Sector Grants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {grants.map((grant, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={grant.image} alt={grant.title} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
                    <p className="text-gray-600 mb-4">{grant.description}</p>
                    <Link href={`/grant/${grant.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-500 hover:text-green-600">Read more...</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Financial Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Microfinance Institutions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>BRAC Sierra Leone</li>
                  <li>LAPO Microfinance</li>
                  <li>Ecobank Microfinance</li>
                  <li>ASA Microfinance</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Agricultural Banks</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Sierra Leone Commercial Bank</li>
                  <li>Rokel Commercial Bank</li>
                  <li>Union Trust Bank</li>
                  <li>FBN Bank</li>
                </ul>
              </div>
            </div>
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

      <footer className="bg-green-800 text-white py-8">
        {/* Footer content (same as home page) */}
      </footer>
    </div>
  )
}

