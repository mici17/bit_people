import React from 'react';

const CardUser = (props) => {
    const user = props.user;
    return (
        <section className="single-card-user">
            <div className="thumbnail"><img className="img" src={user.photo.large} alt="slicica" /></div>
            <p className="name">{user.name.first}</p>
            <p className="mail">{user.hideEmail()}</p>
            <p className="dob">Birth date: {user.formatDate()}</p>
        </section>
        // <section className="single-list-user">
        //     <div className="thumb-img"><img className="round-img" src={user.photo.thumbnail} alt="slicica" /></div>
        //     <p className="list-name">{user.name.first} {user.name.last}</p>
        //     <p><i className="fas fa-envelope"></i>email:{user.hideEmail()}</p>
        //     <p className="dob"><i className="fas fa-birthday-cake"></i> {user.formatDate()}</p>
        // </section>
    )
};


export {
    CardUser
}