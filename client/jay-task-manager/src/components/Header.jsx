import { useEffect } from 'react'
import '../styles.css'
const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      const h1Element = document.querySelector('.header-title')
      if (h1Element) {
        h1Element.classList.remove('animate-bounce')
      }
    }, 2500)
  }, [])
  return (
    <header>
      <h1 className=" header-title text-4xl font-normal mb-3 animate-bounce">
        <span style={{ color: '#A0E4CB' }}>Task</span>Quake
      </h1>
      <p className="text-slate-600 font-medium">
        Shake Up Your Task Game With TaskQuake....!!
      </p>
    </header>
  )
}

export default Header
