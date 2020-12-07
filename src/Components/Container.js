import React, {useEffect} from 'react';
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos, loadUsers} from "../Redux/actions";

function Container(props) {
    const photos = useSelector(state => state.photos);
    const users = useSelector(state => state.users);
    const photosLoad = useSelector(state => state.photosLoad);
    const usersLoad = useSelector(state => state.usersLoad);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadUsers());
        dispatch(loadPhotos());
    }, []);

    return (
        <div className="container">
            {(photosLoad || usersLoad) ? (<div className="load">Идет loading...</div>) : (
                photos.map((photo) => {
                    return (<Card key={photo.id} photo={photo} users={users} />);
                })
            )}
        </div>
    );
}

export default Container;