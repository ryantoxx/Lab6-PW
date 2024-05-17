import React, { useState } from 'react';
import RecipeActions from './RecipeActions';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const searchRecipes = () => {
    setLoading(true);
    fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
      headers: {
        'X-Api-Key': 'f3ukSJuGl6wLjpotEVzdMA==9K5I6h6KEB5jOQM5'
      }
    })
    .then(response => {
      setLoading(false);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setRecipes(data);
    })
    .catch(error => {
      setLoading(false);
      console.error('Error fetching recipes:', error);
    });
  };

  return (
    <div className="RecipeSearch">
      <div className="search-bar-container">
        <input type="text" value={query} onChange={handleInputChange} className="search-bar" placeholder="Search recipes..." />
        <button className="search-button" onClick={searchRecipes} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="recipe-list-container">
        <ul className="RecipeList">
          {recipes.map((recipe, index) => (
            <li key={index} className="RecipeItem">
              <h3>{recipe.title}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <RecipeActions recipe={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeSearch;

