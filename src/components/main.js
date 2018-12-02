import React from 'react';
import Landing from './landing';
import Portfolio from './portfolio';
import Contact from './contact';
import About from './about';
import {Switch, Route} from 'react-router-dom';
import Soon_page from './soon';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/soon" component={Soon_page} />
    </Switch>
)

export default Main;