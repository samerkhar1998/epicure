import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './components/restaurants/restaurantAssets/restaurantsSlicer'
import dishesReducer from './components/dishes/dishesSlicer'
import chefsReducer from './components/dishes/dishesSlicer'

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    chefs: chefsReducer,
  }
})

