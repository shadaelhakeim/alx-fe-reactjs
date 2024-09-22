import { useState } from 'react'
import { fetchUserData } from '../services/githubService';
function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

const handleSearch = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const response = await fetchUserData(username);

    if (response && response.data) {
      // Check if login exists in the response
      if (response.data.login) {
        setUserData(response.data);
      } else {
        throw new Error("User not found");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    // Log the actual error for debugging
    console.error(err);
    setError("Looks like we can't find the user.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for GitHub user"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.name} />
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}




export default Search;
