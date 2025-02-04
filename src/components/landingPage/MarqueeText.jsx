'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Marquee = () => {
  const controls = useAnimation()
  const [width, setWidth] = useState(0)
  const isAnimating = useRef(false)

  useEffect(() => {
    const calculateWidth = () => {
      const viewportWidth = window.innerWidth
      setWidth(viewportWidth)
    }

    calculateWidth()
    window.addEventListener('resize', calculateWidth)

    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  useEffect(() => {
    const animate = async () => {
      if (isAnimating.current) return
      isAnimating.current = true

      while (isAnimating.current) {
        try {
          await controls.start({
            x: -width,
            transition: {
              duration: 20,
              ease: 'linear',
            },
          })
          await controls.start({
            x: 0,
            transition: {
              duration: 0
            }
          })
        } catch (err) {
          isAnimating.current = false
        }
      }
    }

    if (width > 0) {
      animate()
    }

    return () => {
      isAnimating.current = false
    }
  }, [controls, width])

  const items = [
    { text: 'Jackpot ♠' },
    { text: 'casino ♠', opacity: 'opacity-60' },
    { text: 'Spinning wheel ♠' },
    { text: 'casino games ♠', opacity: 'opacity-60' },
  ]

  return (
    <div className="relative w-full overflow-hidden bg-[#151C28]">
      <div className="py-8 md:py-12 lg:py-16">
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
        >
          {[...items, ...items].map((item, index) => (
            <h1
              key={index}
              className={`mx-4 text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e50] via-[#fc466b] to-[#ff4e50] ${item.opacity}`}
            >
              {item.text}
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee