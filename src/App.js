import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
import { Navbar, Container } from 'react-bootstrap';

function App(){
    return (
        <div>
            <Navbar  variant="light" style={{backgroundColor: '#66CDAA'}} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Personal digital assistant</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container">
                <h1>Personal Digital Assistants</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <ProfileCard title="abdessamad" handle="@abdoemi" image={AlexaImage} />
                    </div>
                    <div className="col-sm-4">
                        <ProfileCard title="ayoub" handle="@rooba" image={CortanaImage} />
                    </div>
                    <div className="col-sm-4">
                        <ProfileCard title="chahid" handle="@chahido" image={SiriImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App