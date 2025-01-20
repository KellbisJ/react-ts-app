import React, { useRef, useEffect, useState } from "react"
import { ImgHTMLAttributes } from "react"

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  onLazyLoad?: (imgElement: HTMLImageElement) => void
}

export const LazyImage = ({ src, onLazyLoad, ...props }: Props): React.JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
  const [lazyLoadExecuted, setLazyLoadExecuted] = useState<boolean>(false)

  const node = useRef<HTMLImageElement>(null)
  
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !lazyLoadExecuted) {
        setImgSrc(src)
      } if (onLazyLoad && node.current) {
        onLazyLoad(node.current)
        setLazyLoadExecuted(true)
       }
    })
  })

    if (node.current) {

      observer.observe(node.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, lazyLoadExecuted])
  

  return (
    <img
      ref={node}
      src={imgSrc}
      {...props}
    />
)  
}