import './picviewer.scss';

import React from 'react';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

// import {connect} from 'react-redux';

//components
import Gallery from '../components/Gallery/index';
import Photo from '../components/Photo/index';

//actions


let Picviewer = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/photo">
                    <Photo className="photo"/>
                </Route>
                <Route path="/">
                    <Gallery />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Picviewer;
