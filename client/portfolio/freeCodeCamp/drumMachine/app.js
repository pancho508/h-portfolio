const keys1 = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];
const keys2 = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "play it",
            keys: keys1,
            isChecked: false,

        }
        this.audio = React.createRef()
        this.handleSeachInputKeyPress = this.handleSeachInputKeyPress.bind(this)
        this._handleChange = this._handleChange.bind(this)
    }
    componentDidMount() {
        document.addEventListener('keypress', this.handleSeachInputKeyPress)
    }
    handleSeachInputKeyPress(event) {
        let el = document.getElementById(event.key.toUpperCase())
        if (el) {
            this.playSound(el.childNodes[1])
        }
    }
    playSound = (soundEl) => {
        console.dir(soundEl)
        this.setState({
            title: soundEl.id
        })
        soundEl.parentElement.classList.add('active')
        soundEl.play()
        soundEl.addEventListener('ended', () => {
            soundEl.parentElement.classList.remove('active')
        })
    }
    _handleChange() {
        this.state.isChecked ?
            this.setState({
                keys: keys2,
                isChecked: false

            })
            :
            this.setState({
                keys: keys2,
                isChecked: true

            })
    }
    render() {
        return (
            <div id={"drum-machine"} >
                <div id={"display"}>
                    <h2 >{this.state.title}</h2>
                    <br />
                    {this.state.keys.map((key, idx) => (
                        <DrumPad text={key.keyTrigger} audio={key.url} key={idx} playSound={this.playSound} />
                    ))}
                </div>
                <div className={"side"}>
                    <h2>board</h2>
                    <input ref="switch" checked={this.state.isChecked} onChange={this._handleChange} className="switch" type="checkbox" />
                </div>
            </div>
        )
    }
}
class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.audio = React.createRef()
    }
    render() {
        return (
            <div onClick={() => this.props.playSound(this.audio.current)} className="drum-pad" id={this.props.text}>
                {this.props.text}
                <audio ref={this.audio} src={this.props.audio} className='clip' id={this.props.text} />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"))