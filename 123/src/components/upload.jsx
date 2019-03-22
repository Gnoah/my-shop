import React, { Component } from 'react'
import { storage } from '../Firebase/index'


class Images extends Component {
    constructor(props){
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state ={
            image: null,
            url: '',
            progress: 0
        }
        
    }

    handlerChange = e => {
        if( e.target.files [0] ) {
            const image = this.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handlerUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref('images/${image.name}').put(image);
        uploadTask.on('state_changed',
        (snapshot) => { 
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100);
            this.setState({progress});  
        },
        (error) => {
            console.log(error)
        },
        () => {
            storage.ref('image').child(image.name).getDownloadURL().then( url => {
                console.log(url);
                this.setState({url});                
            })
        });
    }


    render(){
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'colomn',
            alighItems: 'center',
            justifyContent: 'center'
        };

        return(
            <div style = {style}>
            <progress value={this.state.progress} max="100" />
            <br/>
                <input type="file" onChange={this.handlerChange} />
                <button onClick={this.handleUpload.bind(this)}>upload</button>
                <img src={this.state.url} alt="Uploaded images" height="300" width="400" />
            </div>
        )
} 
}

export default Images;