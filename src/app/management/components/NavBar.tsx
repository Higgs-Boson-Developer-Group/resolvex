"use client"; // Mark this file as a client component

import { useState } from "react";
import MenuBar from "./MenuBar";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and desktop navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <p className="text-primary font-weight-bold px-2 py-1 ">ResolveX</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/management/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">
                  Dashboard
                </a>
                <a href="/management/tickets" className="rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">
                  Tickets
                </a>
              </div>
            </div>
          </div>

          {/* Management Menu */}
          <MenuBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="/management/dashboard" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
              Dashboard
            </a>
            <a
              href="/management/tickets"
              className="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-700 hover:text-white"
            >
              Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
