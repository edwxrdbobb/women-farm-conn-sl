import img1 from '@/assets/images/Storage.jpeg'
import img2 from '@/assets/images/farm research .jpg'
import img3 from '@/assets/images/Delivery.jpg'

export default function WhatWeDo() {
  return (
    <>  
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">What We Do</span>
          </h2>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              { title: 'Storage Solution', description: 'We offer affordable storage options that help female farmers reduce post-harvest losses and maintain product quality, ensuring their crops stay fresh and ready for market.', img: img1 },
              { title: 'Financial Support', description: 'Providing grants information and opportunities for female farmers and help them in application process to secure funding in order to boost their productivity.', img: img2 },
              { title: 'Market Access', description: 'We offer an e-commerce platform for selling fresh farm products to hotels, restaurants, individual households, and other businesses, with free delivery included.', img: img3 }
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-6">
                <img src={item.img.src} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-medium text-gray-900 mt-4">{item.title}</h3>
                <p className="mt-2 text-base text-gray-500">{item.description}</p>
                <a href="#" className="mt-4 text-sm font-medium text-green-600 hover:text-green-500">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}