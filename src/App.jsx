
import { useState , useEffect} from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)


  useEffect(()=>{
    alert(`counter itna he ${counter}`)
  },[counter])
  function click(){
    setCounter(counter + 10)
  }

  function decrement(){
    setCounter(counter - 5)
  }

  function click1(){
    setCounter(oldcountervalue => oldcountervalue + 1)
  }

  function decrement1(){
    setCounter(oldcountervalue => oldcountervalue - 1)
  }

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={click}>Increment</button>
      <button onClick={decrement}>Decrement</button>


      <h2>arrow counter: {counter}</h2>
      <button onClick={click1}>Increment Click1</button>
      <button onClick={decrement1}>decrement1</button>
      
    </>




  )
}

export default App
