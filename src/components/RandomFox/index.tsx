import React, {useRef} from "react"

type Props = {
  image: string;
}

export const RandomFox = ({ image }: Props): React.JSX.Element => {
  const node = useRef<HTMLImageElement>(null)


  return (
    <img ref={node} src={image} className="w-[320px] h-auto rounded" />
)  
}