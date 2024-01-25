import { useEffect, useState } from "react";
import "./Github.css";
import { Link } from "react-router-dom";

const Github = () => {
  const [user, setUser] = useState("");
  const [result, setResult] = useState({});

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  return (
    <div className="container">
      <h1 className="h12">Github Profiler</h1>

      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="input-box"
        placeholder="Enter GitHub username"
      />

      <button className="btn" onClick={fetchUserData}>
        Submit
      </button>

      <ul className="user-info">
        <li>Username: {result.login}</li>
        <li>Name: {result.name}</li>
        <li>Company: {result.company}</li>
        <li>Followers: {result.followers}</li>
        <li>Following: {result.following}</li>
        <li>Public Repositories: {result.public_repos}</li>
        <li>Public Gists: {result.public_gists}</li>
        <li>Email: {result.email}</li>
        <Link to={`/follower/${result.login}`}>Followers</Link>
      </ul>
    </div>
  );
};

export default Github;
