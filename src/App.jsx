import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import RecipeSearch from './components/RecipeSearch';
import PersonalCabinet from './components/PersonalCabinet';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [addedRecipes, setAddedRecipes] = useState([]);
  const [showPersonalCabinet, setShowPersonalCabinet] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';
    setIsDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const handleDismissWelcome = () => {
    setShowWelcomePage(false);
  };

  const updateAddedRecipes = (recipeToAdd) => {
    setAddedRecipes(prevAddedRecipes => [...prevAddedRecipes, { title: recipeToAdd }]);
  };

  const updateAddedRecipesToRemove = (recipeToRemove) => {
    setAddedRecipes(prevAddedRecipes => prevAddedRecipes.filter(recipe => recipe.title !== recipeToRemove));
  };

  const handleTogglePersonalCabinet = () => {
    setShowPersonalCabinet(prevState => !prevState);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {showWelcomePage ? (
        <WelcomePage />
      ) : (
        <div>
          <h1>Recipe Search</h1>
          <RecipeSearch updateAddedRecipes={updateAddedRecipes} updateAddedRecipesToRemove={updateAddedRecipesToRemove} />
          {showPersonalCabinet && <PersonalCabinet addedRecipes={addedRecipes} />}
          <button className="cabinet-button" onClick={handleTogglePersonalCabinet}>
            {showPersonalCabinet ? 'Hide Personal Cabinet' : 'Show Personal Cabinet'}
          </button>
        </div>
      )}
      {showWelcomePage && (
        <button className="start-exploring-button" onClick={handleDismissWelcome}>Start Exploring</button>
      )}
    </div>
  );
}

export default App;
