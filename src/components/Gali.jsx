
import { useState } from "react"


const galiArray = [
    'Lode',
    'gandu',
    'pandu',
    'ok',
    'ok',
    'okok',
]
const Gali = () => {

    const [gali , setGali] = useState(galiArray(0))

    const Galide = () =>{
        setGali(galiArray[gali + 1])
    }
  return (
    <div>
    
        <h1>{gali}</h1>
        <button onClick={Galide}>Gali Nikawao</button>
    </div>
    
  )
}

export default Gali