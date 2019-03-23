import React, { Component } from 'react'
import './coeur.css'

class Coeur extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
addOne(){
    this.setState({
        count: this.state.count + 1
    });
}
    render(){
        return(
            <div>
                <span ></span> <label id="coeur">{this.state.count}❤<input type="button"
                onClick = { () => this.addOne()} /></label>
            </div>
        )
} 
}

export default Coeur;
