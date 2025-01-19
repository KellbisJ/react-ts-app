import React from "react";
import { RandomFox } from "@/components/RandomFox";

const Home = (): React.JSX.Element => {
  return (
    <div>
    
       <h1 className="text-3xl font-bold underline text-violet-500">
    Hello world!
      </h1>
      
      <RandomFox/>
      
      <footer >
        
      </footer>
    </div>
  );
}
export default Home