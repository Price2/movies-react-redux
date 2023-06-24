import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initState = {
    loading: false,
    data: [],
    error: '',
    currentPage: 1,
    currentSelectedMovie: {},
    isSelected: false

}

const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (page, thunkAPI) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBmZjg1YzkyMmYzZTNmZWM0MTViNzVhODgwOWVmYyIsInN1YiI6IjY0NzcxMzk1ZDM3MTk3MDBhN2ZlZmZmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqPPBjIXUg352UNWHVjFRHEvl8oJwbEOVdDVU9XNQuA'
                }
            }
        )

        const json = await response.json()
        return json.results
    })



const movieSlice = createSlice({
    name: 'movies',
    initialState: initState,
    reducers: {
        incrementPage(state) {
            state.currentPage++
        },
        decrementPage(state) {
            state.currentPage--
        },
        selectMovie(state, action) {
            state.currentSelectedMovie = action.payload
            state.isSelected = true
        },
        deselectMovie(state) {
            state.isSelected = false
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })

    }
});
export const { incrementPage, decrementPage, selectMovie, deselectMovie } = movieSlice.actions
export {fetchMovies}
export default movieSlice.reducer

