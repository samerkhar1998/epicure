import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './components/restaurants/restaurantAssets/restaurantsSlicer'
import dishesReducer from './components/dishes/dishAssets/dishesSlicer'
import chefsReducer from './components/dishes/dishAssets/dishesSlicer'

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    chefs: chefsReducer,
  }
})

