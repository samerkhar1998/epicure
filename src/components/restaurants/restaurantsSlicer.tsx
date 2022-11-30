import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState:{
        value:[]
    },
    reducers:{
        setRestaurants: (state, action) => {
            state.value = action.payload;
        },
        deleteRestaurant: (state,action) => {
            state.value = state.value.filter((restaurant: {[key:string]: string}) => {
                return restaurant.name !== action.payload;
            })
        },
    },
});

// Action creators are generated for each case reducer function
export const {setRestaurants, deleteRestaurant} = restaurantsSlice.actions

export default restaurantsSlice.reducer