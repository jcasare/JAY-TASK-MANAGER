import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const paragraphRef = useRef(null) // Create a separate ref for the paragraph element

  useEffect(() => {
    if (inView) {
      // Add your animation class or style here
      paragraphRef.current.classList.add('animate-p')
    }
  }, [inView])

  return (
    <p
      ref={ref}
      className="animate-p text-slate-600 font-medium"
      ref={paragraphRef}
    >
      Shake Up Your Task Game with TaskQuake...!!
    </p>
  )
}

const Header = () => {
  return (
    <header>
      <h1 className="text-4xl font-normal mb-3">
        <span style={{ color: '#A0E4CB' }}>Task</span>Quake
      </h1>
      <AnimatedText />
    </header>
  )
}

export default Header
