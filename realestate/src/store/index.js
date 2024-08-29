import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from './categoriesSlice';
import pageSlice from './pageSlice';
import agentsSlice from './agentsSlice';
import propertiesSlice from './propertiesSlice';
import testimonSlice from './testimonSlice';
import favoritesSlice from './favoritesSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        pages: pageSlice,
        agents: agentsSlice,
        properties: propertiesSlice,
        testimons: testimonSlice,
        favorites: favoritesSlice,
        search: searchSlice,
      },
});

export default store;