const ADD = 'ADD';
const SET = 'SET';
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const setMessages = (messages) => {
  return {
    type: SET,
    messages: messages
  }
};
const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        messages: [action.message, ...state.messages]
      }
    case SET:
      return {
        ...state,
        messages: action.messages
      }
    default:
      return state;
  }
};
const store = Redux.createStore(messageReducer);
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: '',
      showMessage: {
        author: "Everything that irritates us about others can lead us to an understanding of ourselvese",
        quote: "C.G. Jung "
      },
    }
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => this.props.setNewMessages(data.quotes))
      .then(() => this.randomQuoteClick())
      .then(() => {
        console.log("This project is working with React/Redux, soo much fun xD")
      })
  }
  randomQuoteClick(e) {
    let idx = Math.floor(Math.random() * this.props.messages.length)
    this.setState({
      showMessage: this.props.messages[idx]
    })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage({ author: this.state.author, quote: this.state.quote })
    this.setState({
      author: '',
      quote: ''
    });
    alert('Success, Your quote was added!')
  }
  render() {
    var asciiStyle = {
      display: "inline-block",
      letterSpacing: "-0.2em",
      lineHeight: "1em",
      textAlign: 'left',
      fontSize: '13px'
    }
    var inputASCII = [
      `<pre><code>+-------+ +-------+    +-------+ +--------+   +-------+ +-------+    +--------+ +-------+    +-------+ +------+`,
      `                             _               ______          _     ______                        _            `,
      `                            | |             (______)        | |   (_____ \\                      | |           `,
      ` ____   _____  ____    ____ | |__    ___     _     _  _____ | |    _____) ) _____  ____    ____ | |__    ___  `,
      `|  _ \\ (____ ||  _ \\  / ___)|  _ \\  / _ \\   | |   | || ___ || |   |  __  / (____ ||  _ \\  / ___)|  _ \\  / _ \\ `,
      `| |_| |/ ___ || | | |( (___ | | | || |_| |  | |__/ / | ____|| |   | |  \\ \\ / ___ || | | |( (___ | | | || |_| |`,
      `|  __/ \\_____||_| |_| \\____)|_| |_| \\___/   |_____/  |_____) \\_)  |_|   |_|\\_____||_| |_| \\____)|_| |_| \\___/ `,
      `|_|                                                                                                           `,
      "+-------+ +-------+    +-------+ +--------+   +-------+ +-------+    +--------+ +-------+    +-------+ +------+",
      "</code></pre>",
    ].join('\n')

    // dangerouslySetInnerHTML expects an object like this:
    var wrappedASCII = { __html: inputASCII };
    return (
      <div id={"quote-box"} >
        <div>
          <span id={"asciiStyle"} dangerouslySetInnerHTML={wrappedASCII}></span>
          <p>Quote of the Day!!</p>
        </div>
        <div>
          <div id={"text"}>
            <div className={"box"}>
              <p className={"glitch"} value={this.state.showMessage.quote}>{this.state.showMessage.quote}</p>
            </div>
            <div className={"box"}>
              <h5 className={"glitch"} id={'author'} value={this.state.showMessage.author}>{this.state.showMessage.author}</h5>
            </div>
            <div className={"box"}>
              <a className="button" id="tweet-quote" title="Tweet this quote!" href="https://twitter.com/intent/tweet" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <button id={'new-quote'} onClick={this.randomQuoteClick.bind(this)}>Random Quote</button>
          </div>
        </div>

        <div>
          <h3>Summit Your Quote:</h3>
          <input
            name={"author"}
            placeholder={'Your Name'}
            value={this.state.author}
            onChange={this.handleChange.bind(this)} />
          <br />
          <input
            name={"quote"}
            placeholder={'Your Quote'}
            value={this.state.quote}
            onChange={this.handleChange.bind(this)} />
          <br />
          <button id={"submitQuote"} onClick={this.submitMessage.bind(this)}>Submit</button>
        </div>

      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return state
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    },
    setNewMessages: (messages) => {
      dispatch(setMessages(messages))
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
ReactDOM.render(
  <AppWrapper />,
  document.getElementById('app')
);
