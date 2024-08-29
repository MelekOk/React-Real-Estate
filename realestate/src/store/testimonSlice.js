import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTestimons = createAsyncThunk(
  'testimons/fetchTestimons',
  async () => {
    const response = await fetch('/db.json'); 
    const data = await response.json();
    return data.testimons;
  }
);

const testimonSlice = createSlice({
  name: 'testimons',
  initialState: {
    testimons: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTestimons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.testimons = action.payload;
      })
      .addCase(fetchTestimons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default testimonSlice.reducer;

export const selectTestimonById = (state, testimonId) =>
  state.testimons.testimons.find((testimon) => testimon.id === testimonId);
