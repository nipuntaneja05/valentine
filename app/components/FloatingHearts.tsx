import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  const hearts = Array(15).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-love-300 text-4xl"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            scale: 0,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
