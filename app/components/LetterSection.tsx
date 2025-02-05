import { motion } from "framer-motion"

export default function LetterSection() {
  return (
    <motion.section
      className="py-16 px-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-love-red">A Letter to My Love</h2>
      <motion.div
        className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          My dearest,
          <br />
          <br />
          From the moment our paths crossed, my life has been filled with joy and wonder. Your love has been my guiding
          light, your smile my daily sunshine. With each passing day, my love for you grows stronger, deeper, and more
          profound.
          <br />
          <br />
          You are not just my partner, but my best friend, my confidant, and my soulmate. Together, we&apos;ve created a
          world of our own, filled with laughter, adventure, and endless love.
          <br />
          <br />
          As we embark on this new chapter, I want you to know that my heart is yours, forever and always.
          <br />
          <br />
          With all my love,
          <br />
          [Your Name]
        </p>
      </motion.div>
    </motion.section>
  )
}

