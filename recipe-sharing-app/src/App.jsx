// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
const App = () => {
  return (
        <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
      <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Display the list of recipes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for recipe details */}
        </Routes>
      </div>
      </Router>
  );
};

export default App;
