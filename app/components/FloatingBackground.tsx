"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const symbols = ["🌸", "💖", "💐", "❤️", "🌷", "🌺"];

export default function FloatingBackground() {
  const [items, setItems] = useState<{ id: number; x: number; delay: number; emoji: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        { 
          id: Math.random(), 
          x: Math.random() * 100, 
          delay: Math.random() * 5, 
          emoji: symbols[Math.floor(Math.random() * symbols.length)] 
        }
      ]);
    }, 700); // Generates a new floating emoji every 700ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {items.map(({ id, x, delay, emoji }) => (
        <motion.div
          key={id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 6, ease: "linear", delay }}
          className="absolute text-3xl"
          style={{ left: `${x}%` }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
