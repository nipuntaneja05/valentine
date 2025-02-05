"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "../components/Navigation"
import FlowerAnimation from "../components/FlowerAnimation"

const memories = [
  { id: 1, src: "/images/image1.jpg", alt: "Our first encounter" },
  { id: 2, src: "/images/image2.jpg", alt: "A romantic getaway" },
  { id: 3, src: "/images/image3.jpg", alt: "Culinary adventures" },
  { id: 4, src: "/images/image4.jpg", alt: "Starlit evening" },
]

export default function Memories() {
  return (
    <main className="relative min-h-screen py-20">
      <Navigation />
      <FlowerAnimation />
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-light mb-8 text-center">Cherished Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={memory.src}
                alt={memory.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-elegant-700 bg-opacity-40 flex items-end justify-center p-4">
                <p className="text-white text-lg font-light">{memory.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
