import React from 'react';

const user = { 
    firstname: 'Divine', 
    lastname: 'Dela',
    profileImage: 'https://avatars1.githubusercontent.com/u/34287487?s=460&v=4'
};

function Hello() {
    return (
        <div className="profile">
            <h1>Hello World!</h1>
            <img src={user.profileImage} />
            <p>My name is {user.lastname} </p>
            <p>I have {1 + 1} brothers </p>
        </div>
    )
}

export default Hello;