import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png"

type NavigationLink = {
    name: string;
    href: string;
};

export default function Header({navigation}: { navigation: NavigationLink[] }) {

    return(
        <>
        <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
            <div className="flex items-center">
              <Link href="/">
                <Image src={logo} alt="Women Farm Connect" width={160} height={100} className="h-auto w-[150px]" />
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href} className="text-base font-medium text-gray-700 hover:text-green-600">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <Link href="/user/signup" className="inline-block bg-white py-2 px-4 border border-green-600 rounded-md text-base font-medium text-green-600 hover:text-white hover:bg-green-800 ">
                Sign up
              </Link>
              <Link href="/user/login" className="inline-block bg-green-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-green-800">
                Log in
              </Link>
            </div>
          </div>
        </nav>
      </header>
        </>
    )
}