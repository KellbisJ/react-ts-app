import React from "react"

type Props = {
  image: string;
}

export const RandomFox = ({image}: Props): React.JSX.Element => {
  return (
    <img src={image} className="w-[320px] h-auto rounded" />
)  
}