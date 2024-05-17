import React from 'react';

const PersonalCabinet = () => {
  const getAddedRecipes = Object.keys(localStorage)
    .filter(key => key.startsWith('added_') && localStorage.getItem(key) === "true")
    .map(key => key.replace('added_', ''));

  return (
    <div className="cabinet">
      <h2>Added Recipes</h2>
      {getAddedRecipes.length > 0 ? (
        <ul>
        {getAddedRecipes.map((recipe, index) => (
          <li key={index}>{recipe} </li>
        ))}
      </ul>
      ):(
        <p> Nothing has been added </p>
      )} 
    </div>
  );
};

export default PersonalCabinet;


