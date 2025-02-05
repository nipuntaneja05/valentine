"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/letter", label: "Letter" },
  { href: "/memories", label: "Memories" },
  { href: "/proposal", label: "Proposal" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-elegant-100 bg-opacity-90 backdrop-blur-sm">
      <ul className="flex justify-center space-x-8 py-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} passHref>
              <motion.span
                className={`text-lg cursor-pointer ${pathname === item.href ? "text-elegant-700" : "text-elegant-400"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

