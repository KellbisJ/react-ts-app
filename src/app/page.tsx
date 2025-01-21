"use client";

import React, { useState } from "react";
import { MouseEventHandler} from "react"
import { LazyImage } from "@/components/RandomFox";
import {random} from "lodash"

const randomN = (): number => random(1, 123)

const Home = (): React.JSX.Element => {
  const [images, setImages] = useState<Array<IFoxImage>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
  

    const newFoxImage: IFoxImage = {
    id: crypto.randomUUID(),
    url: `https://randomfox.ca/images/${randomN()}.jpg?${new Date().getTime()}`
    }
    setImages([
      ...images,
      newFoxImage
    ])
  }
  
  return (
    <div> 
      <h1 className="text-xl lg:text-3xl font-bold text-violet-500 px-4 py-2">Random Fox Images</h1>
      <div className="flex justify-center mb-12">
        <button className="p-2 min-w-28 bg-rose-500 hover:bg-rose-600 rounded text-blue-50 fixed top-11 z-10 text-sm lg:text-base" onClick={addNewFox}>Add Fox</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center p-2">
         {images.map(({id, url}) => (
        <div key={id} className="p-2 w-full h-36 lg:h-72 rounded">
          <LazyImage
            className="w-full h-full bg-gray-300 rounded object-cover object-center"
            src={url}
            />
        </div>

      ))}
      </div> 
    </div>
  );
}
export default Home