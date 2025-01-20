import React, { useRef, useEffect, useState } from "react"
import { ImgHTMLAttributes } from "react"

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export const LazyImage = ({ src, ...props }: Props): React.JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  const node = useRef<HTMLImageElement>(null)
  
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
         setImgSrc(src)
         
       }
    })
  })

    if (node.current) {
      observer.observe(node.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [src])
  

  return (
    <img
      ref={node}
      src={imgSrc}
      {...props}
    />
)  
}