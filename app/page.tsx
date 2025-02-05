"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import FloatingHearts from "./components/FloatingHearts"
import NavigationArrow from "./components/NavigationArrow"

const sections = ["intro", "letter", "memories", "proposal"]

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showProposal, setShowProposal] = useState(false)
  const [showNoResponse, setShowNoResponse] = useState(false)

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  const handleNoClick = () => {
    setShowNoResponse(true)
  }

  const handleYesClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    setShowProposal(true)
  }

  const renderSection = () => {
    switch (sections[currentSection]) {
      case "intro":
        return (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4 text-love-600">To my cutieeeeee</h1>
            <p className="text-2xl text-love-500">
              Shravastiiiiii
            </p>
          </motion.div>
        )

      case "proposal":
        return (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center relative"
          >
            <h2 className="text-4xl font-bold mb-8 text-love-600">
              Sawaal yeh hai?
            </h2>
            <p className="text-2xl mb-8 text-love-500">Will you be my valentine?</p>
            <div className="flex justify-center space-x-4 relative">
              <motion.button
                className="px-6 py-3 bg-love-500 text-white rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
              >
                Yes
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-love-300 text-love-700 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNoClick}
              >
                No
              </motion.button>
            </div>

            {/* Yes Response Popup */}
            {showProposal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <p className="text-2xl text-love-600 font-bold animate-heartbeat">
                  I want to spend every valentine with you 
                  ,Love you the most:3
                  
                </p>
              </motion.div>
            )}

            {/* Animated SVG Flowers with Rose-Inspired Design Arising from the Lower End of the Screen */}
            <AnimatePresence>
              {showProposal && (
                <>
                  {/* Left Rose */}
                  <motion.svg
                    className="fixed bottom-0 left-0"
                    viewBox="0 0 100 150"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '300px', height: '300px' }}
                  >
                    {/* Rose petals */}
                    <g>
                      <circle cx="50" cy="50" r="12" fill="#c2185b" />
                      <circle cx="40" cy="40" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="60" cy="40" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="40" cy="60" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="60" cy="60" r="10" fill="#e91e63" opacity="0.8" />
                    </g>
                    {/* Stem and curling leaves */}
                    <path
                      d="M50,70 C45,90 40,110 35,130"
                      stroke="#388e3c"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M50,70 C55,90 60,110 65,130"
                      stroke="#388e3c"
                      strokeWidth="3"
                      fill="none"
                    />
                  </motion.svg>

                  {/* Right Rose */}
                  <motion.svg
                    className="fixed bottom-0 right-0"
                    viewBox="0 0 100 150"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '300px', height: '300px' }}
                  >
                    <g>
                      <circle cx="50" cy="50" r="12" fill="#c2185b" />
                      <circle cx="40" cy="40" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="60" cy="40" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="40" cy="60" r="10" fill="#e91e63" opacity="0.8" />
                      <circle cx="60" cy="60" r="10" fill="#e91e63" opacity="0.8" />
                    </g>
                    <path
                      d="M50,70 C45,90 40,110 35,130"
                      stroke="#388e3c"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M50,70 C55,90 60,110 65,130"
                      stroke="#388e3c"
                      strokeWidth="3"
                      fill="none"
                    />
                  </motion.svg>
                </>
              )}
            </AnimatePresence>

            {/* No Button Popup Response */}
            <AnimatePresence>
              {showNoResponse && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setShowNoResponse(false)}
                    >
                      ✖
                    </button>
                    <p className="text-2xl text-love-600 font-bold">
                      BITCH! Shut up, that&apos;s not allowed.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case "letter":
        return (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6 text-center text-love-600">
              To the best person ever
            </h2>
            <p className="text-lg leading-relaxed text-love-700">
              My biwi,
              <br />
              <br />
              Since the day i met you i loved ur company. I fw the retardness and autism alot. Time kaha kha jati hai tu 
              pata bhi nhi chalta even sitting with you is so fun for me i can't express. 
              <br />
              <br />
              At the point of meeting you the first time i realised that shit yeh toh achi milgyi maza aagya fr.
              I love everything about you, You are genuinely one of the funniest dopest and best person i have ever met.

              <br />
              <br />
              I wanna spend every one of valentine with you only.Everything is so FUN when its us together. I LOVE YOU .
              <br />
              <br />
              Aapka apna,
              <br />
              Nipun Taneja
            </p>
          </motion.div>
        )

        case "memories":
  return (
    <motion.div
      key="memories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-love-600">
        Fire Moments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { id: 1, src: "/images/image1.jpg", alt: "Mauj" },
          { id: 2, src: "/images/image2.jpg", alt: "First TRIPP" },
          { id: 3, src: "/images/image3.jpg", alt: "First Date" },
          { id: 4, src: "/images/image4.jpg", alt: "Masti" },
        ].map((memory) => (
          <motion.div
            key={memory.id}
            className="relative h-64 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Updated Image Path */}
            <img
              src={memory.src}
              alt={memory.alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            {/* Removed pink overlay and replaced with subtle text shadow */}
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <p className="text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-md">
                {memory.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

        

      default:
        return null
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <FloatingHearts />
      <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      {currentSection < sections.length - 1 && (
        <NavigationArrow onClick={nextSection} />
      )}
    </main>
  )
}
