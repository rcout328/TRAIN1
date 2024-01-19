import { useEffect , useState} from "react"

const Api = () => {
    const [search , setSearch] = useState('')

    const [post , setpost] = useState([])


    const [searchresult, setSearchresult] = useState([])
    const searchhandle = () => {
        const filterdata = post.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        });
        setSearchresult(filterdata);
      };

    const clearsearch = () =>{
        search("");
        setSearchresult([]);
    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((data)=>{
            setpost(data)
        })
        .catch(err =>{
            console.log(err)
            setpost([])

        })
        console.log(post)

    })

  return (
    <div>
        <h1>Post data</h1>
     
        <input 
        
        type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        
        ></input>
    <button onClick={searchhandle}  >Submit</button>
    <button onClick={clearsearch}>clear</button>

        <ul>

        {searchresult.length > 0 ? (
          searchresult.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
        </ul>
    </div>
  )
}

export default Api
