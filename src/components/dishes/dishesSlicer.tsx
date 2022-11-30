import {createSlice} from '@reduxjs/toolkit';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState:{
        value:[]
    },
    reducers:{
        setDishes:(state, action) => {
            state.value = action.payload;
        },
        deleteDishes: (state,action) => {
            state.value = state.value.filter((restaurant: {[key:string]:string})=>{
                return restaurant.name !== action.payload;
            })
        },
    },
})

// Action creators are generated for each case reducer function
export const {setDishes, deleteDishes} = dishesSlice.actions

export default dishesSlice.reducer