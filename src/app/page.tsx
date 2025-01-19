import React from "react";
import { RandomFox } from "@/components/RandomFox";

const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

const Home = (): React.JSX.Element => {
  return (
    <div>
    
       <h1 className="text-3xl font-bold underline text-violet-500">
    Hello world!
      </h1>
      
      <RandomFox image={ `https://randomfox.ca/images/${random()}.jpg`} />
      
      <footer >
        
      </footer>
    </div>
  );
}
export default Home