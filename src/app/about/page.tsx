import Image from 'next/image'
// import Link from 'next/link'
import bg from '@/assets/images/research.jpg'
import img1 from '@/assets/images/about us.jpg'
import img2 from '@/assets/images/Kadie.png'
import leo from '@/assets/images/Leo.jpeg'
import edward from '@/assets/images/edward.jpg'
import hannah from '@/assets/images/hannah.jpg'
import salmata from '@/assets/images/salmata.jpg'



const teamMembers = [
  { name: 'Leo Abdulai', image: {leo}, role: 'Project Manager' },
  { name: 'Edward Bob-Kamara', image: {edward}, role: 'Lead Developer' },
  { name: 'Hannah Barrie', image: {hannah}, role: 'Marketing Specialist' },
  { name: 'Salamatu Conteh', image: {salmata}, role: 'Community Outreach Coordinator' },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <section className="relative h-[400px]">
          <Image src={bg} alt="About Us Hero" layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8 max-w-2xl">Connecting Women Farmers to Resources, Markets, and Financial Support</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-32 px-4">
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
                <Image src={img1} alt="Our Mission" width={500} height={400} className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          <div className="container mx-32 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src={img2} alt="Our Mission" width={500} height={400} className="rounded-lg shadow-md" />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  Our mission is to empower female farmers by providing them with essential resources, market access, and financial support,
                  enabling sustainable agricultural practices and improving their livelihoods.
                </p>
                <p className="text-gray-700 mb-4">
                  We strive to create a world where female farmers have equal access to opportunities, tools, and knowledge to thrive in agriculture,
                  contributing to food security and economic growth.
                </p>
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
                From humble beginnings to a growing community, we have empowered countless women to take charge of their farms
                and futures. Our journey is one of collaboration, innovation, and unwavering commitment to gender equality in agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto mb-4 bg-gray-200" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
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

