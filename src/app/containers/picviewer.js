import './picviewer.scss';

import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {addPhotoToList, signOut, likePhoto, unlikePhoto} from '../actions/index';

//components
import Gallery from '../components/Gallery/index';
import Photo from '../components/Photo/index';

//actions


let Picviewer = (props) => {
    const {
        state,
        addPhotoToList,
        signOut,
        likePhoto,
        unlikePhoto,
    } = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/photo/:id">
                    <Photo
                        signOut={signOut}
                        state={state}
                        className="photo"
                        likePhoto={likePhoto}
                        unlikePhoto={unlikePhoto}/>
                </Route>
                <Route path="/" >
                    <Gallery
                        signOut={signOut}
                        state={state}
                        addPhotoToList={addPhotoToList}
                        likePhoto={likePhoto}
                        unlikePhoto={unlikePhoto}/>
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
        unlikePhoto: (id) => dispatch(unlikePhoto(id)),
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
