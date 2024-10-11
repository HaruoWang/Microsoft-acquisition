import { useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"

export function ScrollIndicator() {
    const [scrollProgress, setScrollProgress] = useState(0)
  
    useEffect(() => {
      const updateScrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = `${scrollPx / winHeightPx * 100}%`
        setScrollProgress(parseFloat(scrolled))
      }
  
      window.addEventListener('scroll', updateScrollProgress)
  
      return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])
  
    const calculateOpacity = (progress: number) => {
      return Math.min(progress / 10, 1)
    }
  
    return (
      <Progress 
        value={scrollProgress} 
        className="fixed bottom-10 h-1.5 w-[calc(100%-6rem)] mix-blend-difference"
        style={{
          opacity: calculateOpacity(scrollProgress)
        }}
      />
    )
  }