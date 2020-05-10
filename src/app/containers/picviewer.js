import './picviewer.scss';

import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {addPhotoToList, changeViewedPhoto, signOut, likePhoto, unlikePhoto} from '../actions/index';

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
        changeViewedPhoto,
    } = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/photo/">
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
                        changeViewedPhoto={changeViewedPhoto}
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
        changeViewedPhoto: (photo) => dispatch(changeViewedPhoto(photo))
    }
}

Picviewer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Picviewer);

export default Picviewer;
