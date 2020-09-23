//Redux - Una accion para usar en reducer
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
//Redux - Nuestro Reducer que toma la accion y nos da un nuevo estado para la Store
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
//Redux - Creamos nuestra store usando el reducer * Aqui tambien podemos usar combineReducers EJ.
// const { combineReducers } = Redux;
// const todoApp = combineReducers({
// 	todos,
// 	visibilityFilter
// });
const store = Redux.createStore(messageReducer);

// ReactRedux - Provider nos deja encapsular al app dandole aceso a nuestra store y connect nos deja crear el contenedor de nuestro componente principal 
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => ({
      input: '',
      messages: state.messages.concat(state.input)
    }));
  }
  render() {
    return (
      <div>
        <h2>Create a new Quote:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
//ReactRedux - Creamos unuestro contenedor usando mapStateToProps(Conecta el estado de la store de redux hacia los props del componente) y mapDispatchToProps(Conecta ): It connects redux actions to react props.
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
//React - Encapsulamos nuestro contendor para dar acceso hacia nuestra store
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};

//ReactDom - Reproducimos el tronco  
ReactDOM.render(
  <AppWrapper />,
  document.getElementById('quote-box')
);
