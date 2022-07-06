import react from "react";
import './App.css';
import Homepage from "./Homepage";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

const App = ()=>{
    return(
        <Router>
            <div className='app'>
                <Routes>
                    <Route exact path='/' element={<Homepage/>}/>
                </Routes>
            </div>
           
        </Router>
    )
}

export default App;