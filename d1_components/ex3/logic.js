class App extends React.Component {
    render() {
        return (
            <Box />
        );
    }
}


class Box extends React.Component {
    render() {
        return (
            <div>
                <Button/>
            </div>
        )
    };
}

class Button extends React.Component {
    render() {
        return (
            <input type="button" value="Click me" id ="mybutton"></input>
        )
    };
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);