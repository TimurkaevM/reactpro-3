import React from 'react';
import List from "./List";
import Content from "./Content";
import Buttons from "./Buttons";



function Card(props) {


    return (
        <div className="card">
            <Buttons photo={props.photo} />
            <Content photo={props.photo} users={props.users}/>
            <List />
        </div>
    );
}

export default Card;