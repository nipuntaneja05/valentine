import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="text-center py-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-love-red animate-glow">Our Love Story</h1>
    </motion.header>
  )
}

