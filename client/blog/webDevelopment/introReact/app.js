var Hoja = () =>(
    <div>
        <h4>o o </h4>
        <h4>o o o o </h4>
        <h4>o 0 o h o 0 o </h4>
        <h4>o 0 o 0 o h o 0 o 0 o </h4>
        <h4>o 0 o h o 0 o </h4>
    </div>
)
var Ramita = () =>(
    <div>
        <Hoja />
        <h3>\  |  ramitas  |  /</h3>
        <h3>\  |  ramitas  |  |  /</h3>
    </div>
)
var Rama = () =>(
    <div>
        <Ramita />
        <h2>\ | r | /</h2>
        <h2>\ | r | /</h2>
    </div>
) 
var Tronko = () =>(
    <div>
        <Rama />
        <h1>| t |</h1>
        <h1>| t |</h1>
        <h1>| t |</h1>
    </div>
)

ReactDOM.render(<Tronko />, document.getElementById("Raiz"));
