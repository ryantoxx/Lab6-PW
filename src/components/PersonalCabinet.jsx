import React from 'react';

const PersonalCabinet = () => {
  const [addedRecipes, setAddedRecipes] = React.useState(getAddedRecipes());

  function getAddedRecipes() {
    return Object.keys(localStorage)
      .filter(key => key.startsWith('added_'))
      .map(key => ({
        title: key.replace('added_', ''),
        liked: localStorage.getItem(key) === 'true'
      }));
  }

  return (
    <div className="cabinet">
      <h2>Added Recipes</h2>
      <ul>
        {addedRecipes.map((recipe, index) => (
          <li key={index}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalCabinet;


