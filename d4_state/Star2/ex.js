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
        this.enable1 = this.enable1.bind(this);
        this.enable2 = this.enable2.bind(this);
        this.enable3 = this.enable3.bind(this);
        this.enable4 = this.enable4.bind(this);
        this.enable5 = this.enable5.bind(this);

        this.state = {
            hide1: "",
            hide2: "",
            hide3: "",
            hide4: "",
            hide5: "",
        };
    }
    enable1() {
        this.setState({
            hide1: event.target.className = "false",
        })
    }

    enable2() {
        this.setState({
            hide2: event.target.className = "false",
        })
    }

    enable3() {
        this.setState({
            hide3: event.target.className = "false",
        })
    }
    enable4() {
        this.setState({
            hide4: event.target.className = "false",
        })
    }
    enable5() {
        this.setState({
            hide5: event.target.className = "false",
        })
    }
    render() {
        return (
            <div>
                <h1>Which color do you want?</h1>
                <span>disable the ones you don't want with a click</span>
                <div>
                    <button onClick={this.enable1} className={this.state.hide1} >Blue</button>
                    <button onClick={this.enable2} className={this.state.hide2} >purple</button>
                    <button onClick={this.enable3} className={this.state.hide3} >green</button>
                    <button onClick={this.enable4} className={this.state.hide4} >red</button>
                    <button onClick={this.enable5} className={this.state.hide5} >pink</button>
                </div>
            </div>
        );
    }
}




ReactDOM.render(
    <App />,
    document.getElementById("root")
);