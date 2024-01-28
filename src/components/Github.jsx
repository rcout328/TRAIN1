import { useEffect, useState } from "react";
import "./Github.css"; // Import the external CSS file
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
      <div className="card">
        <h1 className="title">Github Profiler</h1>

        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="input-text"
          placeholder="Enter GitHub username"
        />

        <button className="submit-button" onClick={fetchUserData}>
          Submit
        </button>

        {result.login && (
          <ul className="user-info">
          <li>Username: {result.login}</li>
        <li>Name: {result.name}</li>
        <li>Company: {result.company}</li>
        <li>Followers: {result.followers}</li>
        <li>Following: {result.following}</li>
        <li>Public Repositories: {result.public_repos}</li>
        <li>Public Gists: {result.public_gists}</li>
        <li>Email: {result.email}</li>
            <Link to={`/follower/${result.login}`} className="link">Followers</Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Github;
