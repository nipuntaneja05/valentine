"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import FlowerAnimation from "../components/FlowerAnimation";

export default function Proposal() {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-pink-200">
      <Navigation />
      <FlowerAnimation />
      <motion.div
        className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-light mb-8">A Question of Forever</h2>
        <p className="text-2xl mb-8">Will you marry me?</p>
        <div className="flex justify-center space-x-4">
          {/* Yes Button */}
          <motion.button
            className="px-6 py-3 bg-elegant-500 text-white rounded-full font-light text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setResponse("yes")}
          >
            Yes
          </motion.button>
          {/* No Button with pop-up */}
          <div className="relative">
            <motion.button
              className="px-6 py-3 bg-elegant-300 text-elegant-700 rounded-full font-light text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setResponse("no")}
            >
              No
            </motion.button>
            <AnimatePresence>
              {response === "no" && (
                <motion.div
                  className="absolute top-full mt-2 right-0 bg-elegant-100 text-elegant-800 px-4 py-2 rounded-full shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  My heart is still full of love.
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
            <p className="text-2xl text-elegant-600 font-light">
              My heart soars. Our journey together begins anew.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
