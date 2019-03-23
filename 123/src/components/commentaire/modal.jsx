import React from 'react'
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Comment from './Commentaire';
import './comment.css'

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        count: 0
      };
    }
  
    addOne(){
      this.setState({
          count: this.state.count + 1
      });
    }

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

  
    render() {
      
      return (
        <>
          <h4 id="com" onClick={this.handleShow}>
          <span id="one"></span>Comment {this.state.count}
          </h4>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header id="head" closeButton>
            </Modal.Header>
            <Modal.Body>
              <Comment/>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  
  export default Example