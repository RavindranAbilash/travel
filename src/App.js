import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from './component/Navbar'
import Home from "./component/pages/Home";

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
