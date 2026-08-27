import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function FadeUp({
  children,
  className = '',
  delay = 0,
  as: Component = motion.div,
  ...props
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease }}
      {...props}
    >
      {children}
    </Component>
  )
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}
