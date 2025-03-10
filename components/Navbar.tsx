"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import MagicButton from "./ui/MagicButton"
import { FaDownload, FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { name: "Problems", href: "#problems" },
  { name: "Features", href: "#features" },
  { name: "Download", href: "#download" },
  { name: "Support", href: "#donate" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className={`bg-amber-500 border-b-2 border-black ${isScrolled ? "shadow-sm" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Desktop Nav */}
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <div className="relative h-10 w-10 mr-3">
                    <div className="absolute inset-0 bg-white rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">
                      C
                    </div>
                  </div>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-6 flex items-center space-x-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="px-3 py-2 text-black font-medium hover:bg-amber-400 rounded-md transition-colors border-b-2 border-transparent hover:border-black"
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Download button */}
              <div className="hidden md:flex items-center">
                <Link href="#download">
                  <MagicButton title="Download Beta" icon={<FaDownload />} position="left" />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-amber-400 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-amber-200 border-b-2 border-black"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-amber-300 border-l-2 border-transparent hover:border-black"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 pb-1">
                  <Link href="#download" onClick={closeMobileMenu}>
                    <MagicButton title="Download Beta" icon={<FaDownload />} position="left" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar

