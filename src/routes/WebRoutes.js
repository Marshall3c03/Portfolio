import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import Profile from '../containers/Profile';
import Blog from '../containers/Blog';

  const WebRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/blog' element={<Blog/>} />
        {/*<Route path='/planner' element={<Planner />} />
        <Route path='/shoppingList' element={<ShoppingList />} />
        <Route path='/recipebook/:recipeId' element={<Recipe/>} />
        <Route path='/update-recipe/:recipeId' element={<AddRecipe/>} /> */}
      </Routes>
    )
  }

  export default WebRoutes;