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
ReactDom.render(element, document.getElementById('root'));







