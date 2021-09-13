import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from './component/Navbar'
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import Products from "./component/pages/Products";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/signUp" component={SignUp}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
