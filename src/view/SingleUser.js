import React from 'react';

const SingleUser = (props) => {
    const user = props.user;
    return (
        <section className="single-user">
            <div className="thumbnail"><img className="img" src={user.photo} alt="slicica" /></div>
            <p className="name">Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p className="dob">Date of birth: {(new Date(user.dob).getMonth() + 1) + "-" + new Date(user.dob).getDate() + "-" + new Date(user.dob).getFullYear()}</p>
        </section>
    )
};

export {
    SingleUser
}