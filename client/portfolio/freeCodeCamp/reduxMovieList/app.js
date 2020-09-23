const exampleList = [
    { Title: "Pan’s Labyrinth", Year: "2006", Poster: null, imdbID: "tt0051636" },
    { Title: "The Exterminating Angel", Year: "1962", Poster: null, imdbID: "tt01630636" },
    { Title: "Amores Perros", Year: "2000", Poster: null, imdbID: "tt0086246" },
    { Title: "Canoa: A Shameful Memory", Year: "1976", Poster: null, imdbID: "tt00125436" },
    { Title: "El Infierno", Year: "2010", Poster: null, imdbID: "tt00924266" }
]
// redux ***
const createStore = Redux.createStore
// ACTIONS ***
const selectMovie = (movie) => {
    return {
        type: "MOVIE_SELECTED",
        payload: movie
    }
}
const searchAPI = (movies) => {
    console.log("apiaction",)
    return {
        type: "SEARCH_API",
        payload: movies["Search"]
    }
}
// REDUCERS ***
const moivesReducer = (state = exampleList, action) => {
    switch (action.type) {
        case 'SEARCH_API':
            return action.payload
        default:
            return state
    }
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
    searchAPI: searchAPI
}
// COMPONENTS ***
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        };
        this.updateText = this.updateText.bind(this)
        this.hitAPI = this.hitAPI.bind(this)
    }
    updateText(e) {
        this.setState({
            inputText: e.target.value
        })
    }
    hitAPI() {
        let query = `http://www.omdbapi.com/?s=${this.state.inputText}&apikey=d345712e`
        fetch(query)
            .then(response => response.json())
            .then(data => this.props.searchAPI(data))
            .then(this.setState({ inputText: "" }))
    }
    render() {
        return (
            <div>
                <h2>Search</h2>
                <input
                    type="text"
                    placeholder="Movie Name"
                    value={this.state.inputText}
                    onChange={this.updateText}
                />
                <button onClick={this.hitAPI}>Search</button>
            </div>
        )
    }
}
const ContainerSearch = connect(mapStateToProps, mapDispatchToProps)(Search)
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
                    <p>Title: {props.selectedMovie.Title}</p>
                    <p>Release Date: {props.selectedMovie.Year}</p>
                    <p>imdbID: {props.selectedMovie.imdbID}</p>
                    <img src={props.selectedMovie.Poster} alt="boohoo" className="img-responsive" />
                </div>
            </div>
        )
    }
}
const ContainerDetails = connect(mapStateToProps)(MovieDetails)
const MovieList = (props) => {
    const listItems = props.movies.map((movie) => {
        return (
            <div key={movie.Title}>
                <span>{movie.Title}, {movie.Year}</span>
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
        <h1>React/Redux Movie Search API</h1>
        <ContainerSearch />
        <ContainerList />
        <ContainerDetails />
    </Provider>,
    document.getElementById('root')
);