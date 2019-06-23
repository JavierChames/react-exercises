
class App extends React.Component {
    render() {
        return (
            <div className="bar">
                <NavBarItems />
                <Main />
                <MainText />
                <MainPictures />
                <MainPicturesText />
            </div>
        );
    }
}

class NavBarItems extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Service</li>
                    <li>Work</li>
                    <li className="underline">The Team</li>
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
    render() {
        return (
            <div className="cont">
                <div>
                    <div className="circle1"> </div>
                    <div className="cont1">
                        <p>USER INTERFACE DESIGN</p>
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
                    <div className="circle1 circle2"> </div>
                    <div className="cont1">
                        <p>CONCEPT AND IDEAS</p>
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


                <div className="circle1 circle3"> </div>
                <div className="cont1">
                    <p>DESING ADN BRANDING</p>
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

class MainPicturesText extends React.Component {
    render() {
        return (
            <div>




                {/* <p>   CONCEPT AND IDEAS"</p>
                <p>  DESIDNG ADN BRANDS" </p> */}
            </div >


        )
    };
}






ReactDOM.render(
    <App />,
    document.getElementById("root")
);