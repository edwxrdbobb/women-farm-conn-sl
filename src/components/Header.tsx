"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.png"

type NavigationLink = {
  name: string
  href: string
  subItems?: { name: string; href: string }[]
}

export default function Header({ navigation }: { navigation: NavigationLink[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Women Farm Connect" width={160} height={100} className="h-auto w-[150px]" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <div key={link.name} className="relative inline-block text-left" ref={dropdownRef}>
                  {link.subItems ? (
                    <>
                      <button
                        onClick={() => setOpenMenu(openMenu === link.name ? null : link.name)}
                        className="text-base font-medium text-gray-700 hover:text-green-600 inline-flex items-center"
                      >
                        {link.name}
                        <svg
                          className={`ml-2 h-5 w-5 transition-transform ${
                            openMenu === link.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openMenu === link.name && (
                        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                                role="menuitem"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href} className="text-base font-medium text-gray-700 hover:text-green-600">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="ml-10 space-x-4">
              <Link
                href="/user/signup"
                className="inline-block bg-white py-2 px-4 border border-green-600 rounded-md text-base font-medium text-green-600 hover:text-white hover:bg-green-800"
              >
                Sign up
              </Link>
              <Link
                href="/user/login"
                className="inline-block bg-green-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-green-800"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

