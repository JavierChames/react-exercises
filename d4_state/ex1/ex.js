class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.state = {
            count: 0
        };
    }
    increase() {
        this.setState({
            count: Math.floor(Math.random() * 10) + 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>increment</button>
                <span>   {this.state.count}</span>
            </div>
        );
    }
}



ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);