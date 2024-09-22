import SearchResult from './components/SearchResult'; // Import the component

function App() {
  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <input type="text" placeholder="Search for GitHub user" />
      <SearchResult /> {/* Render the imported component */}
    </div>
  );
}

export default App;
