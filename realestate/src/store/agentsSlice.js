import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAgents = createAsyncThunk('agents/fetchAgents', async () => {
  const response = await fetch('http://localhost:3000/agents');
  const data = await response.json();
  return data;
});

const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default agentsSlice.reducer;
