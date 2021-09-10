import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from './component/Navbar'

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
