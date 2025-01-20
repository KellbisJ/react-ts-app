import React, { useRef, useEffect, useState } from "react"

type Props = {
  image: string;
}

export const RandomFox = ({ image }: Props): React.JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  const node = useRef<HTMLImageElement>(null)
  
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
         setImgSrc(image)
         
       }
    })
  })

    if (node.current) {
      observer.observe(node.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [image])
  

  return (
    <img ref={node} src={imgSrc} className="w-[320px] h-auto rounded bg-gray-300" />
)  
}