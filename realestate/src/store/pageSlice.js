import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
  const response = await fetch('/db.json');
  const data = await response.json();
  return data.pages;
});

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pageSlice.reducer;
