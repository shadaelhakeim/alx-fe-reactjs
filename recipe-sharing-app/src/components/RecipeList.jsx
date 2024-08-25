
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
const RecipeList = () => {
  // Access the recipes from the Zustand store
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
