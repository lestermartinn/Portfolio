'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Trigger animation only once after mount
    const timeout = setTimeout(() => setIsMounted(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
