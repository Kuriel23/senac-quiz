import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionBox = motion(Box)
export const MotionHeading = motion(Heading)
export const MotionText = motion(Text)

export const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
}
