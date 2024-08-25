// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'; // Ensure this import is correct
import RecipeList from './components/RecipeList'; // Ensure this import is correct
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />
        <AddRecipeForm /> {/* Include the form to add new recipes */}
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Display the list of recipes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for recipe details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
