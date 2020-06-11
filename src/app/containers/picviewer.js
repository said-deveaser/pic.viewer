import './picviewer.scss';

import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';


//components
import Gallery from '../components/Gallery/index';
import Photo from '../components/Photo/index';

//actions
import {addPhotoToList, signOut, likePhoto} from '../actions/index';


let Picviewer = (props) => {
    const {
        state,
        addPhotoToList,
        signOut,
        likePhoto,
    } = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/photo/:id">
                    <Photo
                        signOut={signOut}
                        state={state}
                        className="photo"
                        likePhoto={likePhoto}/>
                </Route>
                <Route path="/" >
                    <Gallery
                        signOut={signOut}
                        state={state}
                        addPhotoToList={addPhotoToList}
                        likePhoto={likePhoto}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        likePhoto: (id) => dispatch(likePhoto(id)),
        signOut: () => dispatch(signOut()),
        addPhotoToList: (photos) => dispatch(addPhotoToList(photos)),
    }
}

Picviewer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Picviewer);

export default Picviewer;
