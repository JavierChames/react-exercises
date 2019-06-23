class Quiz extends React.Component {
    render() {
        return (
            <div className="Quiz">
                <Q1 />
                <Q2 />
            </div>
        );
    }
}

class Q1 extends React.Component {
    render() {
        return (
            <div>
                <h2>How do you like front end?</h2>
                <QuizTitle />
            </div>
        );
    }
}

class QuizTitle extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>How much do you love front end?</span>
                </div>
                <div>
                    <Q1input />
                </div>
            </div>
        );
    }
}

class Q1input extends React.Component {
    render() {
        return (
            <div>
                <input type="range" max="10" list="tickmarks" />
                <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="5" label="5"></option>
                    <option value="10" label="10"></option>
                </datalist>
            </div>
        );
    }
}


class Q2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    What is your favorit front end topic/feature?
                    <br/>
                    <Q2input />
                </div>
            </div>
        );
    }
}

class Q2input extends React.Component {
    render() {
        return (
            <input type="text" />
        );
    }
}

ReactDOM.render(
    <Quiz />,
    document.getElementById("root")
);