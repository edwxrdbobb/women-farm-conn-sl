import ProductGrid from "@/components/ProductGrid";
import { Link } from "lucide-react";
import Image from "next/image";

import bg from '@/assets/images/young famer.jpg'

export default function MarketAccess(){

  return(
    <>
        <section className="relative h-[600px]">
          <Image src={bg} alt="Hero Image" layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Women Farm Connect</h1>
            <p className="text-xl mb-8 max-w-2xl">Connecting Female Farmers with Resources, Market Access, and Financial Support.</p>
            <Link href="/explore" className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition-colors">
              Explore More
            </Link>
          </div>
        </section>

        {/* product grid */}
        <section className="px-32 mt-24">
          <ProductGrid />
        </section>
    </>
  )
}