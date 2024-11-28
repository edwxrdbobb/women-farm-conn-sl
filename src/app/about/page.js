import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        {/* Header content (same as home page) */}
      </header>

      <main className="flex-grow">
        <section className="relative h-[400px]">
          <Image src="/about-hero.jpg" alt="About Us Hero" layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8 max-w-2xl">Connecting Women Farmers to Resources, Markets, and Financial Support</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  Our mission is to empower female farmers by providing them with essential resources, market access, and financial support,
                  enabling sustainable agricultural practices and improving their livelihoods.
                </p>
                <p className="text-gray-700 mb-4">
                  We strive to create a world where female farmers have equal access to opportunities, tools, and knowledge to thrive in agriculture,
                  contributing to food security and economic growth.
                </p>
              </div>
              <div>
                <Image src="/mission-image.jpg" alt="Our Mission" width={500} height={400} className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                Women Farm Connect was born out of a desire to address the unique challenges faced by female farmers. Our founder,
                Abdulai Conteh, was inspired by the resilience of his grandma in agriculture, created this platform to bridge the
                gap in resources and support for female farmers.
              </p>
              <p className="text-gray-700 mb-4">
                From humble beginnings to a growing community, we've empowered countless women to take charge of their farms
                and futures. Our journey is one of collaboration, innovation, and unwavering commitment to gender equality in agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {['M\'mah Zonbo', 'Fatima Sia Gborie', 'Hannah Barrie', 'Salamatu Conteh', 'Tamba Tom Nanoh'].map((name, index) => (
                <div key={index} className="text-center">
                  <Image src={`/team-member-${index + 1}.jpg`} alt={name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-gray-600">Team Member</p>
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

