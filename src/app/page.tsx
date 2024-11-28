import ContactForm from '@/components/ContactForm'
import HeroSlider from '@/components/HeroSlider'
import WhatWeDo from '@/components/WhatWeDo'

export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <HeroSlider />
      </div>

      {/* what we do */}
      <WhatWeDo />

      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Our Farmers Say
            </h2>
            <p className="mt-4 text-xl text-green-200">
              &quot;Women Farm Connect has transformed my business. The support and access to new markets have been invaluable.&quot;
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              — Amina, Vegetable Farmer
            </p>
            <a href="#" className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50">
              See more testimonials
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions or want to learn more? Get in touch with us!
            </p>
          </div>
          <div className="mt-12 w-full flex justify-center align-center">
            {/* contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

