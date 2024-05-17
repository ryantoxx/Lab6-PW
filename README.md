# Recipe Finder App

Recipe Finder is a web application that allows users to search for recipes, like their favorite ones, and view them in a personal cabinet. The app also supports light and dark mode themes.

## Features

- **Welcome Page**: A welcome screen with a "Start Exploring" button to navigate to the recipe search functionality.
- **Recipe Search**: Users can search for recipes by entering keywords. The app fetches recipes from an external API and displays them.
- **Like Recipes**: Users can like recipes, which will be stored in their personal cabinet.
- **Personal Cabinet**: A section where users can view all their liked recipes.
- **Dark Mode**: Toggle between light and dark themes.

## User Flows

### 1. Welcome Page

1. **Start Exploring**: When the user visits the app, they see a welcome page with a "Start Exploring" button.
2. **Navigate to Recipe Search**: Clicking the "Start Exploring" button navigates the user to the recipe search page.

### 2. Recipe Search

1. **Search Bar**: The user can enter a search term in the search bar and click the "Search" button.
2. **Display Recipes**: The app fetches recipes from an external API and displays them below the search bar.
3. **Add Recipes**: Each recipe has a "Add" button. Clicking this button will save the recipe to the user's personal cabinet.

### 3. Personal Cabinet

1. **View Added Recipes**: The user can toggle the display of their personal cabinet to view all liked recipes.
2. **Hide Personal Cabinet**: The user can hide the personal cabinet by clicking the toggle button again.

### 4. Theme Toggle

1. **Toggle Theme**: The user can switch between light and dark modes using the theme toggle button. The selected theme will be saved and persisted across page reloads.

## Installation
   ```bash
   git clone https://github.com/ryantoxx/Lab6-PW
   npm install
   npm start
   ```


