import  { useEffect, useState } from "react";

const Api2 = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [searchresult, setSearchresult] = useState([]);

  const searchhandle = () => {
    const filterdata = post.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchresult(filterdata);
  };

  const clearsearch = () => {
    setSearch("");
    setSearchresult([]);
  };
  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/airlines")
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
        setPost([]);
      });
  }, []);

  

  return (
    <div>
      <h1>Airlines Search</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchhandle}>Search</button>
      <button onClick={clearsearch}>Clear</button>

      <ul>
        {searchresult.length > 0 ? (
          searchresult.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Api2;

<form onSubmit={SearchHandle}>
<input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
></input>
</form>
<select>
{
   searchresult.length > 0 ? (
    searchresult.map((item) => {
        return(
           <option key={item.id}>{item.name}</option>
        )
    })
   )
    :
    (
         <option>No result found</option>
    )}
</select>


const SearchHandle = (e) =>{
  e.preventDefault();
  const filterdata = user.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLowerCase());
  });
  setSearchresult(filterdata);
}