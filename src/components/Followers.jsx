import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Followers of {loginkar}</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {followers.map((follower) => (
            <div
              key={follower.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <img
                src={follower.avatar_url}
                alt={`${follower.login}'s avatar`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  <Link
                    to={`/follower/profile/${follower.login}`}
                    className="text-blue-600 hover:underline"
                  >
                    {follower.login}
                  </Link>
                </h2>
                <p className="text-gray-600">{follower.bio}</p>
                <p className="text-gray-600">{follower.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Followers;
