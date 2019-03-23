import React, { Component } from 'react'
import LireComment from './LireComment';
import 'bootstrap/dist/css/bootstrap.css';

export default class Comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: [],     
      };
    }

    
      
    

    onChange = (event) => {
        this.setState({term: event.target.value});
      }

      onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]          
        });
      }
  
    render() {
      return (
        <div>
            <form className="App" onSubmit={this.onSubmit}>
                <table>
                  <tr>
                    <td><input value={this.state.term} onChange={this.onChange} /></td>
                    <td><button className = "btn btn-sm btn-primary">Comment</button></td>
                  </tr>
                </table>
            </form>
            <LireComment items={this.state.items} />
        </div>
      );
    }
  }