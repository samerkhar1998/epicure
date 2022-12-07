import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './components/restaurants/restaurantsSlicer'
import dishesReducer from './components/dishes/dishForHomePage/dishesSlicer'
import chefsReducer from './components/dishes/dishForHomePage/dishesSlicer'

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    chefs: chefsReducer,
  }
})

