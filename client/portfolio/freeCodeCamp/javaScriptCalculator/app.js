const { Component } = React;
const { Provider, connect } = ReactRedux;
const ADD_NUM = 'ADD_NUM';
const addToMemoryAction = (desc) => {
    return {
        type: ADD_NUM,
        payload: desc
    }
};
const CLEAR_MEM = 'CLEAR_MEM';
const clearMemoryAction = (desc) => {
    return {
        type: CLEAR_MEM,
        payload: desc
    }
};
const memReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NUM':
            return [
                ...state,
                action.payload,
            ];
        case 'CLEAR_MEM':
            return [];
        default:
            return state;
    }
};
const calculatorApp = Redux.combineReducers({
    mem: memReducer
});
const store = Redux.createStore(calculatorApp);
class Calculator extends Component {
    render() {
        return (
            <div class="container">
                <h1>Redux/React Calculator</h1>
                <h6>-by Pancho</h6>
                <MemListConnected />
                <PadItemConnected />
            </div>
        );
    }
};
class PadItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: []
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(event) {
        switch (event.target.className) {
            case "clear":
                store.dispatch(clearMemoryAction())
                this.setState({ num: "" })
                break;
            case "number":
                const currentStateCopy = [...this.state.num]
                currentStateCopy.push(event.target.value)
                this.setState({
                    num: currentStateCopy
                })
                break;
            case "operator":
                if (this.state.num === "") {
                    alert("Hey bro you cant use two operators at once!!")
                } else {
                    store.dispatch(addToMemoryAction(this.state.num.join("")))
                    store.dispatch(addToMemoryAction(event.target.value))
                    this.setState({ num: "" })
                }
                break;
            case "equals":
                store.dispatch(addToMemoryAction(this.state.num.join("")))
                const currentStore = store.getState()
                let arr = currentStore.mem
                if (arr[0] === "-" || arr[0] === "+") {
                    if (arr[0] === "-") {
                        arr[1] = -arr[1]
                    }
                    arr = arr.slice(1)
                }
                if (arr[0] === "*" || arr[0] === "/") {
                    return arr[arr.length - 1]
                }
                arr[0].includes(".") ? arr[0] = parseFloat(arr[0], 10) : arr[0] = parseInt(arr[0], 10)
                let res = arr[0]
                for (let i = 1; i < arr.length; i = i + 2) {
                    arr[i + 1].includes(".") ? arr[i + 1] = parseFloat(arr[i + 1], 10) : arr[i + 1] = parseInt(arr[i + 1], 10)
                    switch (arr[i]) {
                        case "+":
                            res = res + arr[i + 1]
                            break;
                        case "-":
                            res = res - arr[i + 1]
                            break;
                        case "*":
                            res = res * arr[i + 1]
                            break;
                        case "/":
                            res = res / arr[i + 1]
                            break;
                    }
                }
                this.setState({
                    num: [res + ""]
                })
                store.dispatch(clearMemoryAction())
                break;
        }
    }
    render() {
        let symb = [{ val: "AC", type: "clear" }, { val: "7", type: "number" }, { val: "8", type: "number" }, { val: "9", type: "number" }, { val: "/", type: "operator" }, { val: "4", type: "number" }, { val: "5", type: "number" }, { val: "6", type: "number" }, { val: "*", type: "operator" }, { val: "1", type: "number" }, { val: "2", type: "number" }, { val: "3", type: "number" }, { val: "-", type: "operator" }, { val: "0", type: "number" }, { val: ".", type: "number" }, { val: "=", type: "equals" }, { val: "+", type: "operator" }]
        return (
            <div >
                <div class="display">{this.state.num}</div>
                <div class="buttons">
                    {symb.map(el => (
                        <button onClick={(e) => this.addItem(e)} className={`${el.type}`} value={el.val}>{el.val}</button>
                    ))}
                </div>
            </div>
        );
    }
}
const PadItemConnected = connect()(PadItem);
class memList extends Component {
    render() {
        const { mem } = this.props;
        return (
            <div class="display">
                {mem.join("")}
            </div>
        );
    }
}
const MemListConnected = connect(
    state => ({
        mem: state.mem
    })
)(memList);
ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('app')
);
