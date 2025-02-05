import { motion } from "framer-motion"

export default function FlowerAnimation() {
  const flowers = Array(5).fill(null)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-elegant-300 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          ❀
        </motion.div>
      ))}
    </div>
  )
}

