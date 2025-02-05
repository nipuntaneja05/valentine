import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface NavigationArrowProps {
  onClick: () => void
}

export default function NavigationArrow({ onClick }: NavigationArrowProps) {
  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <ChevronRight size={48} className="text-love-500" />
    </motion.div>
  )
}

