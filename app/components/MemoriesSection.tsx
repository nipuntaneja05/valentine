import { motion } from "framer-motion"
import Image from "next/image"

const memories = [
  { id: 1, src: "/images/image1.jpg", alt: "Our first date" },
  { id: 2, src: "/images/image2.jpg", alt: "Vacation together" },
  { id: 3, src: "/images/image3.jpg", alt: "Cooking together" },
  { id: 4, src: "/images/image4.jpg", alt: "Stargazing night" },
]

export default function MemoriesSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-love-red">Our Cherished Memories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
              <p className="text-white text-lg font-semibold">{memory.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
