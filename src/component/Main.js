import './Main.css';
import {Button} from "./Button";
import '../App.css'



function Main() {
    return(
        <div className='main-container'>
            <h1>ADVENTURE AWAIT</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className="btn" buttonSize="btn--large" buttonStyle="btn--outline" >
                    GET START
                </Button>
                <Button className="btn" buttonSize="btn--large" buttonStyle="btn--primary" >
                    WATCH TRAILER <i className="far fa-play-circle"/>
                </Button>

            </div>


        </div>
    )
}

export default Main;