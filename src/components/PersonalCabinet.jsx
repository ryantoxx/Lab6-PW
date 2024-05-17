import React from 'react';

const PersonalCabinet = ({ addedRecipes }) => {
  return (
    <div className="cabinet">
      <h2>Added Recipes</h2>
      {addedRecipes.length > 0 ? (
        <ul>
          {addedRecipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      ) : (
        <p>Nothing has been added</p>
      )}
    </div>
  );
};

export default PersonalCabinet;



