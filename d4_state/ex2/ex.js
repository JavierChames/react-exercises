
class App extends React.Component {
    render() {
        return (
            <div className="mainbox">
                {/* <button>SHOW/HIDE</button> */}
                <MyBox />
            </div>
        );
    }
}


class MyBox extends React.Component {
    constructor(props) {
        super(props);
        this.toogle = this.toogle.bind(this);
        this.state = {
            visibility: "visible",
            // width: "50px"
        };
    }
    toogle() {
        this.setState({
            visibility: this.state.visibility === "visible" ? "hidden" : "visible",
            // width: this.state.width === "50px" ? "30px" : "50px",

        });
    }
    render() {
        return (
            <div>
                <button onClick={this.toogle}>SHOW/HIDE</button>
                <div className="yellow" style={{ visibility: this.state.visibility,width:this.state.width }}></div>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);