import { useEffect, useState } from "react"

const MAXIMUM_COUNT = 10;

export const CounterEffect= () => {
  
  const [counter, setCounter] = useState(6)

  useEffect(() => {
    if (counter > 9) {
      console.log("%c Se llego al valor 10 ","color:yellow;background:blue;")
    }
  }, [counter])
  

  const handleClick = () => {
    
    // counter < MAXIMUM_COUNT && setCounter((prev: number) => prev + 1)
    setCounter(prev => Math.min(prev + 1,MAXIMUM_COUNT))
  }

  return (
      <>
          <h1>Counter : {counter} </h1>

          <button onClick={handleClick}> +1 </button>
      </>
  )
}
