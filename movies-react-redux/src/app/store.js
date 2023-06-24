import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/movies/movieSlice'
import pageSlice from '../features/movies/pageSlice'

const store = configureStore({
  reducer: {
    movies: movieSlice,
    // page: pageSlice,
  }
})


export default store