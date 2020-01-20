import React from 'react';
import ReactDom from 'react-dom';

//Function component
function Welcome1(props) {
    return <h1>Hello, {props.name}</h1>;
}

//Class Components
class Welcome2 extends React.Component {
    render () {
        return <h1>Hello {this.props.name} </h1>
    }
}


const element = <Welcome1 name="Day4"/>;

function App() {
    return (
        <div>
            <Welcome1 name="day1"/>
            <Welcome1 name="day2"/>
            <Welcome1 name="day3"/>
            <Welcome1 name="day4"/>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo author={props.author} />
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    )
}


function Avatar(props) {
    return (
        <img className="Avatar" 
            src={props.author.avatarUrl} 
            alt={props.author.name} 
        />
    );
}

function UserInfo(props) {
    return (
        <div>
            <Avatar author={props.author}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}

const comment = {
    date: new Date(),
    text: 'Hello there',
    author: {
        name: 'Divine Dela',
        avatarUrl: 'https://avatars1.githubusercontent.com/u/34287487?s=460&v=4'
    }
};

ReactDom.render(
    <Comment
        date={comment.date}
        author={comment.author}
        text={comment.text}
    />, 
    document.getElementById('root'));







