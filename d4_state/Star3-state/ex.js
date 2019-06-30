class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: "visible"
        };
        this.changevisible = this.changevisible.bind(this);
    }
    changevisible() {
        let newvisibality = this.state.visible === "visible" ? "hidden" : "visible";
        this.setState({
            visible: newvisibality
        });
    }
    render() {
        return (
            <h2 onClick={this.changevisible} style={{ visibility: this.state.visible }}>Title</h2>
        );
    }
}
class Parent extends React.Component {
    render() {
        return <Title />;
    }
}




ReactDOM.render(
    <Parent />,
    document.getElementById("root")
);