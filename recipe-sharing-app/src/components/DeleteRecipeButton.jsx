// src/components/DeleteRecipeButton.jsx
// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the home page after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );

};


  DeleteRecipeButton.propTypes = {
    recipeId: PropTypes.number.isRequired,
};
  
export default DeleteRecipeButton;

