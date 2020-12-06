import React from 'react';
import {useDispatch} from "react-redux";
import {makeFavorite, removeCard} from "../Redux/actions";
import ReactLoading from 'react-loading';

function Buttons(props) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeCard(id));
    };

    const handleMake = (id) => {
        dispatch(makeFavorite(id));
    }



    return (
        <div className="buttons">
            {props.photo.favorite ? (<div><ReactLoading type="spin" className="btn__left" width={20} height={20}/></div>) : (
                <div
                    onClick={()=> handleMake(props.photo.id)}
                    className="btn__left">
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
            )}
            <div
                onClick={() => handleDelete(props.photo.id)}
                className="btn__right"
                disabled={props.photo.deleting}>
                    <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Buttons;