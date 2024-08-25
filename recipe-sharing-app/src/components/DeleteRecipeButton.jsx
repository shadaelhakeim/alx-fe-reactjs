
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to home after deletion
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
