// Simple FadeIn animation inspired by reactbits.dev
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  )
}
