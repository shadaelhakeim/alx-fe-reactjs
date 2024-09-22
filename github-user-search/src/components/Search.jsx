import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPage(1); // Reset page number on new search
    setUserData([]); // Reset user data on new search

    try {
      const response = await fetchUserData(username, location, minRepos);
      
      // Check if response has data
      if (response.data && response.data.items) {
        setUserData(response.data.items);
        setTotalPages(Math.ceil(response.data.total_count / 30)); // Assuming 30 items per page
      } else {
        throw new Error("No user data found.");
      }
    } catch (err) {
      // Log the actual error for debugging
      console.error(err);
      setError("Looks like we can't find any users."); // Set a user-friendly error message
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const response = await fetchUserData(username, location, minRepos, page + 1);
      if (response.data && response.data.items) {
        setUserData((prev) => [...prev, ...response.data.items]); // Append new users
        setPage((prev) => prev + 1); // Increment page number
      } else {
        throw new Error("No more users found.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for GitHub user"
          className="border p-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div>
          {userData.map((user) => (
            <div key={user.id} className="border-b py-2">
              <h2>{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
              {user.avatar_url && (
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
              )}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
          {page < totalPages && (
            <button onClick={handleLoadMore} className="bg-blue-500 text-white p-2 mt-4">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
