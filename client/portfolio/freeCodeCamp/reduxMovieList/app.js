fetch("http://www.omdbapi.com/?s=Amores&plot=short&tomatoes=true&apikey=d345712e")
    .then(response => response.json())
    .then(data => console.log(data));
// redux ***
const createStore = Redux.createStore
// ACTIONS ***
const selectMovie = (movie) => {
    return {
        type: "MOVIE_SELECTED",
        payload: movie
    }
}

// REDUCERS ***
const moivesReducer = () => {
    return [
        { title: "Pan’s Labyrinth", releseDate: "2006", rating: 8.2 },
        { title: "The Exterminating Angel", releseDate: "1962", rating: 8.1 },
        { title: "Amores Perros", releseDate: "2000", rating: 8.1 },
        { title: "Canoa: A Shameful Memory", releseDate: "1976", rating: 7.9 },
        { title: "El Infierno", releseDate: "2010", rating: 7.8 }
    ]
}
const selectedMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}
const combinedReducers = Redux.combineReducers({
    movies: moivesReducer,
    selectedMovie: selectedMovieReducer
})
// react-redux ***
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        selectedMovie: state.selectedMovie
    }
}
const mapDispatchToProps = {
    selectMovie: selectMovie,
}
// COMPONENTS ***
const Seach = () => {
    return (
        
    )
}
const MovieDetails = (props) => {
    if (!props.selectedMovie) {
        return (
            <div className="details-container">
                <h2>Movie</h2>
                <div className='properties'>
                    <p>Select a Movie</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="details-container">
                <h2>Movie</h2>
                <div className='properties'>
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}
const ContainerDetails = connect(mapStateToProps)(MovieDetails)
const MovieList = (props) => {
    console.log("List", props)
    const listItems = props.movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={() => { props.selectMovie(movie) }}>details</button>
            </div>
        )
    })
    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const ContainerList = connect(mapStateToProps, mapDispatchToProps)(MovieList)
const store = createStore(combinedReducers)
ReactDOM.render(
    <Provider store={store}>
        <ContainerList />
        <ContainerDetails />
    </Provider>,
    document.getElementById('root')
);