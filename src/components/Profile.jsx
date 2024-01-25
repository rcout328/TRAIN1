import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            {profile ? (
                <div>
                    <h1>GitHub Profile for {pro}</h1>
                    <li>Username: {profile.login}</li>
        <li>Name: {profile.name}</li>
        <li>Company: {profile.company}</li>
        <li>Followers: {profile.followers}</li>
        <li>Following: {profile.following}</li>
        <li>Public Repositories: {profile.public_repos}</li>
        <li>Public Gists: {profile.public_gists}</li>
        <li>Email: {profile.email}</li>
                    
                </div>
            ) : (
                <p>Loading profile data...</p>
            )}
        </div>
    );
}

export default Profile;
