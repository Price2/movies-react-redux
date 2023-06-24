// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initState = {
//     currentPage: 0,
//     number_of_movies: 20,
//     top_rated_movie: '',
//     rating: 0
// }




// const fetchByPage = createAsyncThunk(
//     'movies/fetchMovies',
//     async (_, thunkAPI) => {
//         const {page} = thunkAPI.getState()
//         const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page.currentPage}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     accept: 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBmZjg1YzkyMmYzZTNmZWM0MTViNzVhODgwOWVmYyIsInN1YiI6IjY0NzcxMzk1ZDM3MTk3MDBhN2ZlZmZmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqPPBjIXUg352UNWHVjFRHEvl8oJwbEOVdDVU9XNQuA'
//                 }
//             }
//         )
//         console.log("am i fetched? ")
//         const json = await response.json()
//         return json
//     })

// const pageSlice = createSlice({
//     name: "page",
//     initialState: initState,
//     reducers: {
//         incrementPage(state) {
//             state.currentPage++
//         },
//         decrementPage(state) {
//             state.currentPage--
//         }
//     },
//     extraReducers: (builder) => {
       
//         builder.addCase(fetchByPage.fulfilled, (state, action) => {
//             state.number_of_movies = action.payload.length;
//             state.top_rated_movie = action.payload?.results.reduce((rate, current) => {
//                 return rate.vote_average > rate.vote_average ? rate : current;
//               });
//         })
//         // builder.addCase(fetchByPage.rejected, (state, action) => {
//         //     state.loading = false;
//         //     state.data = [];
//         //     state.error = action.error.message;
//         // })

//     }
// })

// export {fetchByPage}
// export const { incrementPage, decrementPage } = pageSlice.actions
// export default pageSlice.reducer;
