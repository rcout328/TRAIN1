import { useState, useEffect } from "react";

const Task = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [selected, setSelected] = useState([]);
  const getselect = (e) =>{
    setSelected(e.target.value)
    console.log("1",e.target.value)
  }
  
  const SearchHandle = (e) => {
    e.preventDefault();
    const filterdata = user.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchresult(filterdata);
  };
  
  const deletesel = () =>{
    setSelected(null);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err, searchresult);
        setUser([]);
      });
  }, []);

  return (
    <div>
      <form onSubmit={SearchHandle}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >

        </input>
      </form>

      <div>
        <h1>{selected}</h1>
        <button onClick={deletesel}>Delete</button>
      </div>
      
      <select onChange={getselect}>
        {searchresult.length > 0 ? (
          searchresult.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })
        ) : (
          <option>No result found</option>
        )}
      </select>
    </div>
  );
};

export default Task;
