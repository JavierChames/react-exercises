class App extends React.Component {
    render() {
        return (
                <MyBox />
        );
    }
}


class MyBox extends React.Component {
    constructor(props) {
        super(props);
        this.setColor = this.setColor.bind(this);
        this.state = {
        color: "white"
        };
    }
    setColor(event) {
        console.log
        this.setState({
            color:event.target.textContent
        })

    }
    render() {
        return (
            <div>
                <button onClick={this.setColor}>Blue</button>
                <button onClick={this.setColor}>Green</button>
                <button onClick={this.setColor}>Orange</button>
                <div className="box" style={{ backgroundColor:this.state.color}}></div>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);