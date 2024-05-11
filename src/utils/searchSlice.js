import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: { 
          
    },// here initial state to store search results in slice is an empty object
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;