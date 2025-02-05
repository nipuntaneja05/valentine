"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProposalSection() {
  const [response, setResponse] = useState<string | null>(null);

  // Flower animation variants for left and right flowers
  const leftFlowerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const rightFlowerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <section className="py-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-8 text-love-red"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        A Question for Eternity
      </motion.h2>
      <motion.div
        className="max-w-lg mx-auto bg-white bg-opacity-70 p-8 rounded-lg shadow-lg relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl mb-8">Will you marry me?</p>
        <div className="flex justify-center space-x-4 items-center">
          {/* Yes Button wrapped in a relative container */}
          <div className="relative inline-block">
            <motion.button
              className="px-6 py-3 bg-love-pink text-white rounded-full font-semibold z-10 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setResponse("yes")}
            >
              Yes
            </motion.button>
            <AnimatePresence>
              {response === "yes" && (
                <>
                  {/* Left Flower */}
                  <motion.div
                    className="absolute left-[-150px] top-1/2 transform -translate-y-1/2 text-8xl"
                    variants={leftFlowerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                  >
                    🌸
                  </motion.div>
                  {/* Right Flower */}
                  <motion.div
                    className="absolute right-[-150px] top-1/2 transform -translate-y-1/2 text-8xl"
                    variants={rightFlowerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                  >
                    🌸
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          {/* No Button with pop-up */}
          <div className="relative">
            <motion.button
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setResponse("no")}
            >
              No
            </motion.button>
            <AnimatePresence>
              {response === "no" && (
                <motion.div
                  className="absolute top-full mt-2 right-0 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  I understand. Our love story continues.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      {/* Response Message for Yes */}
      <AnimatePresence>
        {response === "yes" && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl text-love-red font-semibold">
              I love you! Let&apos;s start our forever together! ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
