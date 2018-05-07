import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Homepage from './Homepage'

import {Switch, Route} from 'react-router-dom';

import "../style.css";

function App(){
    return (
    <div className="app-wrapper">
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/slider" component={Slider}></Route>
        </Switch>
        <Footer />
    </div>
    )
}

export default App;
