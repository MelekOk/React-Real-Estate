import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { selectSearchQuery } from './searchSlice';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch('/db.json'); 
    const data = await response.json();
    return data.properties;
  }
);

export const selectProperties = (state) => state.properties.properties;

export const selectFilteredProperties = createSelector(
  [selectProperties, selectSearchQuery],
  (properties, query) => {
    if (!query) return properties;
    const lowerCaseQuery = query.toLowerCase();
    return properties.filter(property => {
      const propertyContent = `${property.title} ${property.description} ${property.status}`.toLowerCase();
      return propertyContent.includes(lowerCaseQuery);
    });
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPropertyBySlug = (state, slug) =>
  state.properties.properties.find((property) => property.slug === slug);

export const selectPropertyById = (state, propertyId) =>
  state.properties.properties.find((property) => property.id === propertyId);

export default propertiesSlice.reducer;
