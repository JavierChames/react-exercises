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
        this.setState({
            color: event.target.textContent
        })

    }
    render() {
        return (
            <div>
                <Button handleClick={this.setColor} text="blue" />
                <Button handleClick={this.setColor} text="green" />
                <Button handleClick={this.setColor} text="orange" />
                <div className="box" style={{ backgroundColor: this.state.color }}></div>
            </div>
        );
    }
}


class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button onClick={this.props.handleClick}>{this.props.text}</button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);