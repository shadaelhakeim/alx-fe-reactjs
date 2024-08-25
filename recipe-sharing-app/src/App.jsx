// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
