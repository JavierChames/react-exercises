class Factorial extends React.Component {
    calc(num) {
        var result = num;
        if (num === 0 || num === 1)
            return 1;
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
    }

    render() {
        let myNumber = 5;
        let sum = this.calc(myNumber);
        return (
            <div>
                <h1>The factorial of {myNumber} is:</h1>
                <p>{sum}</p>
            </div>
        );
    }
}



ReactDOM.render(
    <Factorial />,
    document.getElementById("root")
);