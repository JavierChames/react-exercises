
class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 style={{ "color": this.props.color ,"visibility": this.props.vis }}>{this.props.text} </h2>
        );
    }
}
class Parent extends React.Component {
    render() {
        return (
            <div>
                <Title color="pink" text="First Title" vis="hidden" />
                <Title color="blue" text="Second Title" vis="visible"/>
            </div>
        );
    }
}




ReactDOM.render(
    <Parent />,
    document.getElementById("root")
);