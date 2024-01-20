import { useState, useEffect, useRef } from "react";
import "./Taskmain.css"; // Import your custom CSS file

const Task = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [selected] = useState("");
  const [selectedresult, setSelectedresult] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const getselect = (e) => {
    e.value = { selected };
  };

  const selecthandle = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value.toLowerCase();

    const filterdata = user.find((item) => {
      return item.name.toLowerCase().includes(selectedValue);
    });

    if (filterdata) {
      setSelectedresult((prev) => [...prev, filterdata]);
      setSearchresult((prev) =>
        prev.filter((item) => item.name.toLowerCase() !== selectedValue)
      );
    }
  };

  const SearchHandle = (e) => {
    e.preventDefault();
    const selectedValue = selected.toLowerCase();
    const filterdata = user.filter((item) =>
      item.name.toLowerCase() !== selectedValue.toLowerCase()
    );
    setSearchresult(filterdata);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
        inputRef.current.focus();
      })
      .catch((err) => {
        console.log(err);
        setUser([]);
      });
  }, []);

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  return (
    <div className="container">
      <form onSubmit={SearchHandle}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          className="input-field"
          placeholder="Search for users..."
          onClick={handleInputClick}
        />
      </form>
      {showDropdown && (
        <div>
          <select
            onChange={getselect}
            onClick={selecthandle}
            multiple
            className="select-field"
          >
            {searchresult.length > 0 ? (
              searchresult.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })
            ) : (
              <option>No result found</option>
            )}
          </select>
        </div>
      )}
      <div>
        <ul>
          {selectedresult.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Task;
