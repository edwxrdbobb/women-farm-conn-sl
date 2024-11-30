"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png'

interface NavigationItem {
  name: string;
  href: string;
  subItems?: NavigationItem[];
}

interface HeaderProps {
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMenu(null);
  };

  const renderNavItems = (items: NavigationItem[], isMobile: boolean = false) => {
    return items.map((link) => (
      <div key={link.name} className={`relative ${isMobile ? 'block' : 'inline-block'} text-left`}>
        {link.subItems ? (
          <>
            <button
              onClick={() => setOpenMenu(openMenu === link.name ? null : link.name)}
              className={`text-base font-medium text-gray-700 hover:text-green-600 inline-flex items-center ${
                isMobile ? 'w-full justify-between py-2' : ''
              }`}
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
              <div className={`${isMobile ? 'mt-2' : 'absolute'} z-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {link.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      role="menuitem"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <Link
            href={link.href}
            className={`text-base font-medium text-gray-700 hover:text-green-600 ${
              isMobile ? 'block py-2' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Women Farm Connect" width={160} height={100} className="h-auto w-[150px]" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="ml-10 space-x-8" ref={dropdownRef}>
              {renderNavItems(navigation)}
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
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {renderNavItems(navigation, true)}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1">
                <Link
                  href="/user/signup"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  href="/user/login"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

