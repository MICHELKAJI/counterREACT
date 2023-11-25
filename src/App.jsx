import {useState} from "react";
import { Button, Counter } from "./components/component";

export default function App() {
  const [value, setValue] = useState(0) 

  const resetCounter = () => {
    setValue(0)
  }

  const incrementCounter = () => {    
    setValue(value+1)
  }

  const decrementCounter = () => {
    setValue(value-1)
  }
  return (
    <main>
      <div>            
     <Button onClick={resetCounter}>Reset</Button>  
      </div>      
      <Button onClick={decrementCounter}>-</Button>
      <Counter value={value} />
      <Button onClick={incrementCounter}>+</Button>
    </main>
  )
}
