import React, { Component } from 'react';
    
    
class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    render(){
        let {firstName, lastName, hairColor} = this.props;

        const increaseAge = () => {
            this.setState({age: this.state.age + 1})
        }
        return <div>
            <h4>{lastName}, {firstName}</h4>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday button for {firstName}</button>
        </div>
    }
}

export default Menu;
