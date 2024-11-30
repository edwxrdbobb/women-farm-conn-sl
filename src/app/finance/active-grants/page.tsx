import Image from 'next/image'
import Link from 'next/link'
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
                {/* Header */}
        <div className="text-center mb-12 bg-green-700 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
            Active Grants
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Active grants to take your business to the next level
          </p>
        </div>

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

      </main>

      <footer className="bg-green-800 text-white py-8">
        {/* Footer content (same as home page) */}
      </footer>
    </div>
  )
}

