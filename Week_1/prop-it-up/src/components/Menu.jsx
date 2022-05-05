import React, { Component } from 'react';
    
    
class Menu extends Component{
    render(){
        return <div>
            <h4>{this.props.lastName}, {this.props.firstName}</h4>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
        </div>
    }
}

export default Menu;
