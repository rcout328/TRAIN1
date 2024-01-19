import { useState , useEffect} from "react"

const Gali = () => {

  const [products, setProducts] = useState()


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((data) => {
      setProducts(data)
    })
    .catch(err => {
      console.log(err)
      setProducts([])
    })

    console.log(products)

  }, [])
  return (
    <div>
      products
    </div>
  )
}

export default Gali
