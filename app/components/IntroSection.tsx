import { motion } from "framer-motion"

export default function IntroSection() {
  return (
    <motion.section
      className="text-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-love-red">Welcome to Our Journey</h2>
      <p className="text-xl text-gray-700">Scroll down to relive our most cherished moments together.</p>
    </motion.section>
  )
}

