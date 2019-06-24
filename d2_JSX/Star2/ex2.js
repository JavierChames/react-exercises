
class App extends React.Component {
    render() {
        return (
            <div className="bar">
                <NavBarItems />
                <Main />
                <MainText />
                <MainPictures />
            </div>
        );
    }
}


class NavBarItems extends React.Component {

    // handleClick() {
    //     // console.log('this is:', this);
    //     this.style={fontWeight: "bold"};
    //   }


    render() {
        return (
            <div>
                <ul >
                    <li onMouseDown={e => e.currentTarget.style.fontWeight = "bold"} onMouseUp={e => e.currentTarget.style.fontWeight = "normal"}>Service</li>
                    <li onMouseDown={e => e.currentTarget.style.fontWeight = "bold"} onMouseUp={e => e.currentTarget.style.fontWeight = "normal"}>Work</li>
                    <li onMouseDown={e => e.currentTarget.style.fontWeight = "bold"} onMouseUp={e => e.currentTarget.style.fontWeight = "normal"} className="underline">The Team</li>
                    <li className="li_img1"><img src="images/cell.png"></img> </li>
                </ul>
            </div>

        )
    };
}

class Main extends React.Component {
    render() {
        return (
            <h1>SERVICES</h1>
        )
    };
}

class MainText extends React.Component {
    render() {
        return (
            <div>
                <p className="p1"> Our vision is simple.We want to create Websites and applciations with both </p>
                <p className="p1">  higth quality design and easy access content.The finish product will be</p>
                <p className="p1">  Totally unique and represent awesomeness</p>
            </div>
        )
    };
}




class MainPictures extends React.Component {
    mouseOver(e) {
        let txt = e.target;
        txt.style.border = "2px solid white";
        setTimeout(() => txt.style.border = "", 1000);
    }
    render() {
        return (
            <div className="cont">
                <div>
                    <div className="circle1" onMouseOver={e => e.currentTarget.className = "circle1 circle2"} onMouseOut={e => e.currentTarget.className = "circle1"}> </div>
                    <div className="cont1">
                        <p onMouseOver={this.mouseOver}>USER INTERFACE DESIGN</p>
                    </div>
                    <div className="cont1">
                        Wirepreafing
                    </div>
                    <div className="cont1">
                        Prototyping
                    </div>
                    <div className="cont1">
                        Usability testing
                    </div>
                </div>

                <div>
                    <div className="circle1 circle2" onMouseOver={e => e.currentTarget.className = "circle1"} onMouseOut={e => e.currentTarget.className = "circle1 circle2"}> </div>
                    <div className="cont1">
                        <p onMouseOver={this.mouseOver}>CONCEPT AND IDEAS</p>
                    </div>
                    <div className="cont1">
                        Conceptualation
                    </div>
                    <div className="cont1">
                        Digital Branding
                    </div>
                    <div className="cont1">
                        Product Strategy
                    </div>

                </div>
                <div>

                </div>
                <div>

                    <div className="circle1 circle3" onMouseOver={e => e.currentTarget.className = "circle1 circle2"} onMouseOut={e => e.currentTarget.className = "circle1 circle3"}> </div>
                    <div className="cont1">
                        <p onMouseOver={this.mouseOver}>DESING ADN BRANDING</p>
                    </div>
                    <div className="cont1">
                        Interaction Design
                    </div>
                    <div className="cont1">
                        Identity Design
                    </div>
                    <div className="cont1">
                        Product Strategy
                    </div>
                </div>
            </div>

        )
    };
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);