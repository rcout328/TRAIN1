import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css"; // Make sure this path is correct
import { Link } from "react-router-dom";
const Profile = () => {
    const { pro } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${pro}`)
            .then((response) => response.json())
            .then((data) => {
                setProfile(data);
            })
            .catch((err) => {
                console.error("Error fetching profile:", err);
            });
    }, [pro]);

    return (
        <div className="profile-container">
        <Link to="/" className="back-button">Back</Link>
            {profile ? (
                <div className="profile-card">
                    <img src={profile.avatar_url} alt={profile.login} className="profile-image"/>
                    <h1 className="profile-title">{profile.name || profile.login}</h1>
                    <ul className="profile-info">
                        <li>Username: {profile.login}</li>
                        <li>Company: {profile.company}</li>
                        <li>Followers: {profile.followers}</li>
                        <li>Following: {profile.following}</li>
                        <li>Public Repos: {profile.public_repos}</li>
                        <li>Public Gists: {profile.public_gists}</li>
                        <li>Email: {profile.email}</li>
                    </ul>
                </div>
            ) : (
                <p className="loading">Loading profile data...</p>
            )}
        </div>
    );
}

export default Profile;
