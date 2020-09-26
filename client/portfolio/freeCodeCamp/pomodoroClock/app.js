class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: 25,
            break: 5,
            timeLeft: 1500,
            mins: 25,
            secs: 0,
            running: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.tik = this.tik.bind(this)
        this.pause = this.pause.bind(this)
    }
    handleClick(e) {
        switch (e.target.id) {
            case "break-increment":
                this.setState(state => ({
                    break: state.break + 1
                }))
                break;
            case "break-decrement":
                this.setState(state => ({
                    break: state.break - 1
                }))
                break;
            case "session-increment":
                this.setState(state => ({
                    session: state.session + 1
                }))
                break;
            case "session-decrement":
                this.setState(state => ({
                    session: state.session - 1
                }))
                break;
        }
        const minsToSecs = this.state.session * 60
        this.setState({
            timeLeft: minsToSecs
        })

    }
    tik() {
        //fix here time is starting behind 
        const newTimeLeft = this.state.timeLeft - 1
        const mins = Math.floor(newTimeLeft / 60)
        const secs = newTimeLeft - mins * 60
        // console.log("fire", newTimeLeft, mins, secs)
        this.setState(state => ({
            timeLeft: newTimeLeft,
            mins: mins,
            secs: secs
        }))
    }
    pause() {
        if (this.state.running) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(
                () => { this.tik() },
                1000
            )
        }
        this.setState(state => ({
            running: !state.running
        }))
    }
    componentDidMount() {
        console.log("mount", this.state.running)
        this.pause()
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                {console.log(`${this.state.mins}:${this.state.secs}`)}
                <div id="break-label">
                    <h1>Break Length</h1>
                    <div >
                        <h2><span id="break-length">{this.state.break}</span> Mins</h2>
                        <button id="break-increment" onClick={this.handleClick}>+</button>
                        <button id="break-decrement" onClick={this.handleClick} >-</button>
                    </div>
                </div>
                <div id="session-label">
                    <h1>Session Length</h1>
                    <div>
                        <h2><span id="session-length">{this.state.session}</span> Mins</h2>
                        <button id="session-increment" onClick={this.handleClick}>+</button>
                        <button id="session-decrement" onClick={this.handleClick}>-</button>
                    </div>
                </div>
                <div id="timer-label">
                    Session TIME
                    <h2 id="time-left" >{this.state.mins}:{this.state.secs}</h2>
                    <button id="start_stop" onClick={this.pause}>play/pause</button>
                    <button id="reset" >Reset</button>
                </div>
            </div>
        )
    }


}

ReactDOM.render(<App />, document.getElementById("app"))