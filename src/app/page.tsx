"use client";

import React, { useState } from "react";
import { MouseEventHandler} from "react" // Use go to definition and watch how the types are defined. And then you can import those types, like in this case a type that is related with the DOM
import { LazyImage } from "@/components/RandomFox";


const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

const Home = (): React.JSX.Element => {
  const [images, setImages] = useState<Array<IFoxImage>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
  

    const newFoxImage: IFoxImage = {
    id: crypto.randomUUID(),
    url: `https://randomfox.ca/images/${random()}.jpg?${new Date().getTime()}`
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
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center p-2">
         {images.map(({id, url}) => (
        <div key={id} className="p-2 w-full h-36 lg:h-72 rounded relative">
          <LazyImage
            className="w-full h-full bg-gray-300 rounded object-cover object-center"
            src={url}
            onClick={() => console.log('heyy')
          }/>
        </div>

      ))}
      </div> 
    </div>
  );
}
export default Home