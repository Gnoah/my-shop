import React, { Component } from 'react'
import { storage } from '../Firebase/index'


class Images extends Component {
    constructor(props){
        super(props);
        this.state ={
            image: null,
            url: ''
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
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

        },
        (error) => {
            console.log(error)
        },
        () => {
            
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
            <div>
                <input type="file"/>
                <button>upload</button>
            </div>
        )
} 
}

export default Images;