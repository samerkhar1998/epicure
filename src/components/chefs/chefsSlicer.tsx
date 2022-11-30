import {createSlice} from '@reduxjs/toolkit';

export const chefsSlice = createSlice({
    name: 'chefs',
    initialState:{
        value:[]
    },
    reducers:{
        setChefs:(state, action) => {
            state.value = action.payload;
        },
        deleteChef: (state,action) => {
            state.value = state.value.filter((restaurant: {[key:string]:string})=>{
                return restaurant.name !== action.payload;
            })
        },
    },
})

// Action creators are generated for each case reducer function
export const {setChefs, deleteChef} = chefsSlice.actions

export default chefsSlice.reducer