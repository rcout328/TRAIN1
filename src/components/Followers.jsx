import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Followers.css"; // Import the external CSS file

const Followers = () => {
  const { loginkar } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${loginkar}/followers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFollowers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching followers:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [loginkar]);

  return (
    <div className="container">
      <h1 className="title">Followers of {loginkar}</h1>
      <Link to="/" className="back-button">Back</Link>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="grid-container">
          {followers.map((follower) => (
            <div key={follower.id} className="card">
              <img
                src={follower.avatar_url}
                alt={`${follower.login}'s avatar`}
              />
              <div className="card-content">
                <h2 className="card-title">
                  <Link to={`/follower/profile/${follower.login}`}>
                    {follower.login}
                  </Link>
                </h2>
                <p className="card-text">{follower.bio}</p>
                <p className="card-text">{follower.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Followers;
