import React, { useState } from 'react';

const RecipeActions = ({ recipe, updateAddedRecipes, updateAddedRecipesToRemove }) => {
  const [added, setAdded] = useState(localStorage.getItem(`added_${recipe.title}`) === 'true');

  const toggleLike = () => {
    const newAdded = !added;
    setAdded(newAdded);
    localStorage.setItem(`added_${recipe.title}`, newAdded);
    if (newAdded) {
      updateAddedRecipes(recipe.title); 
    } else {
      updateAddedRecipesToRemove(recipe.title); 
    }
  };

  return (
    <div>
      <button className="add-button" onClick={toggleLike} style={{ color: added ? 'white' : 'white' }}>
        {added ? 'Delete' : 'Add'}
      </button>
    </div>
  );
};

export default RecipeActions;



