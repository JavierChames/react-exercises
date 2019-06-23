
class Quiz extends React.Component {
    render() {
        return (
            <div className="Quiz">
                <QuizTitle />
                <div>
                    <Q1 />
                </div>
                <div>
                    <Q1input />
                </div>
                <div>
                    <Q2 />
                </div>
                <div>
                    <Q2input />
                </div>
            </div>
        );
    }
}

class QuizTitle extends React.Component {
    render() {
        return <h1>How do you liek front end?</h1>;
    }
}

class Q1 extends React.Component {
    render() {
        return (
            <span>How much do you love front end?</span>
        );
    }
}

class Q1input extends React.Component {
    render() {
        return (
            <input type="range" name="points" min="0" max="10"> </input>
        );
    }
}


class Q2 extends React.Component {
    render() {
        return (
            <span>What is your favorit front end topic/feature?</span>
        );
    }
}

class Q2input extends React.Component {
    render() {
        return (
            <input type="text"> </input>
        );
    }
}


// class Box4 extends React.Component {
//     render() {
//         return (<div className="box4"></div>);
//     }
// }





ReactDOM.render(
    // < HelloworldComponent />,
    // <div>
    <Quiz />,
    // {/* <Box2 />, */}
    // {/* <Box3 />, */}
    // {/* <Box4 />, */}
    // </div>,
    document.getElementById("root")
);