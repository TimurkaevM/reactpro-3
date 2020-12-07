import React from 'react';

function Content(props) {

    const user = props.users.find(user => {
        return props.photo.albumId === user.id;
    });

    return (
        <div className="content">
            <div className="imgBx">
                <img src={props.photo.url} alt="404"/>
            </div>
            <div className="contentBx">
                <h3>{user.name}</h3><br/>
                <div className="text">{user.email}</div><br/>
                <div className="title">{props.photo.title}</div>
            </div>
        </div>
    );
}

export default Content;