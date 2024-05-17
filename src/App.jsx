import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import RecipeSearch from './components/RecipeSearch';
import './App.css';

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [addedRecipes, setAddedRecipes] = useState([]);

  const handleDismissWelcome = () => {
    setShowWelcomePage(false);
  };

  const updateAddedRecipes = (recipeToAdd) => {
    setAddedRecipes(prevAddedRecipes => [...prevAddedRecipes, { title: recipeToAdd }]);
  };

  const updateAddedRecipesToRemove = (recipeToRemove) => {
    setAddedRecipes(prevAddedRecipes => prevAddedRecipes.filter(recipe => recipe.title !== recipeToRemove));
  };


  return (
    <div className={`App`}>
      {showWelcomePage ? (
        <WelcomePage />
      ) : (
        <div>
          <h1>Recipe Search</h1>
          <RecipeSearch updateAddedRecipes={updateAddedRecipes} updateAddedRecipesToRemove={updateAddedRecipesToRemove} />
        </div>
      )}
      {showWelcomePage && (
        <button className="start-exploring-button" onClick={handleDismissWelcome}>Start Exploring</button>
      )}
    </div>
  );
}

export default App;
