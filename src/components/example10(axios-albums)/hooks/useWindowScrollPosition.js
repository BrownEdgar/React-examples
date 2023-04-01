import { useState, useEffect } from "react"


export default function useWindowScrollPosition() {
  const [position, setPosition] = useState({})
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { clientHeight } = document.body;
      const showtime = scrollY + innerHeight + 400 > clientHeight
      const positions = {
				scrollY: scrollY.toFixed(1) ,
        innerHeight,
        body: clientHeight,
        showtime
      }
      setPosition(positions)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}
