"use client";

import React, { useState } from "react";
import { RandomFox } from "@/components/RandomFox";
import { log } from "console";

type ImageFox = { id: string, url: string}

const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

const Home = (): React.JSX.Element => {
  const [images, setImages] = useState<Array<ImageFox>>([
    {id: crypto.randomUUID(), url: `https://randomfox.ca/images/${random()}.jpg`},
     {id: crypto.randomUUID(), url: `https://randomfox.ca/images/${random()}.jpg`},
     {id: crypto.randomUUID(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: crypto.randomUUID(), url: `https://randomfox.ca/images/${random()}.jpg`}
  ])

  console.log(images);
  
  return (
    <div> 
      <h1 className="text-3xl font-bold underline text-violet-500">Hello world!</h1>
      {images.map(({id, url}) => (
        <div key={id} className="p-4">
  <RandomFox image={ url} />
        </div>

      ))}
    
      
    </div>
  );
}
export default Home