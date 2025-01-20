"use client";

import React, { useState } from "react";
import { MouseEventHandler} from "react" // Use go to definition and watch how the types are defined. And then you can import those types, like in this case a type that is related with the DOM
import { LazyImage } from "@/components/RandomFox";

type ImageFox = { id: string, url: string}

const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

const Home = (): React.JSX.Element => {
  const [images, setImages] = useState<Array<ImageFox>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
  

    const newFoxImage: ImageFox = {
    id: crypto.randomUUID(),
    url: `https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([
      ...images,
      newFoxImage
    ])
  }
  
  return (
    <div> 
      <h1 className="text-3xl font-bold underline text-violet-500">Hello world!</h1>
        <button className="p-2 min-w-28 bg-rose-500 hover:bg-rose-600 rounded text-blue-50" onClick={addNewFox}>Add Fox</button>
      {images.map(({id, url}) => (
        <div key={id} className="p-4">
          <LazyImage
            className="w-[320px] h-auto rounded bg-gray-300"
            src={url}
            onClick={() => console.log('heyy')
          }/>
        </div>

      ))}
    
      
    </div>
  );
}
export default Home