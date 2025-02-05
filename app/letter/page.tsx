"use client"

import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import FlowerAnimation from "../components/FlowerAnimation"

export default function Letter() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <Navigation />
      <FlowerAnimation />
      <motion.div
        className="max-w-2xl mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-light mb-6 text-center">A Letter to My Love</h2>
        <p className="text-lg leading-relaxed">
          My dearest,
          <br />
          <br />
          In the quiet moments of reflection, I find myself overwhelmed by the depth of our connection. Your presence in
          my life has been a transformative force, bringing light to my darkest days and amplifying the joy in my
          happiest moments.
          <br />
          <br />
          Our journey together has been nothing short of extraordinary. We've weathered storms and basked in sunshine,
          each experience strengthening the bond we share. Your unwavering support and boundless love have been my
          anchor and my wings.
          <br />
          <br />
          As we stand on the precipice of our next great adventure, I want you to know that my commitment to us is
          unshakeable. You are my partner, my confidant, and my greatest love.
          <br />
          <br />
          Here's to our past, our present, and our beautiful future together.
          <br />
          <br />
          Forever yours,
          <br />
          [Your Name]
        </p>
      </motion.div>
    </main>
  )
}

