"use client";

import React, { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

const Home = (): React.JSX.Element => {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ])
  return (
    <div> 
      <h1 className="text-3xl font-bold underline text-violet-500">Hello world!</h1>
      {images.map((image, index) => (
        <div key={index} className="p-4">
  <RandomFox image={ image} />
        </div>

      ))}
    
      
    </div>
  );
}
export default Home