class Rnd extends React.Component {

    render() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let answer = getRandomInt(1, 10);
        if (answer > 5) {
            answer = <h1>You won</h1>;
        } else {
            answer = <h3>You lost</h3>;
        }

        return (
            <div>
                {answer}
            </div>
        );
    }
}



ReactDOM.render(
    <Rnd />,
    document.getElementById("root")
);