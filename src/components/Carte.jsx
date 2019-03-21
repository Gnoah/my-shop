import React, { useState } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './Carte.css'
import Coeur from './coeur/coeur'
import Coms from './commentaire/modal'



var Carte = props => {
    
       //ajout comment
const commentsData = []
const [comments, setComments] = useState(commentsData)
const [compt, setCompt] = useState(0)

const addComment = comment => {
comment.id = compt
    setComments([ ...comments, comment ])
}

        return (
    
    <MDBRow>
    <div className="card-deck">    
        {props.products.length > 0 ? (  
                          
            props.products.map(product => (
                
                <MDBCol md="4" className="colone">
                <div className="card" key={product.id}>
                    <img src={product.fich} className="card-img-top" alt="upload images" width=" 400" height="300"></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.nom}</h5>
                        <p className="card-text">{
                            (product.desc.length > 115)?product.desc.slice(0, 113)+"...":product.desc
                            }</p>
                        <span id="price">{product.prix}Ar</span>
                    </div>
                    <div className="card-footer">
                           <Coms/>     
                           <Coeur /> 
                    </div>
                </div>  
                </MDBCol>    
                ))
      ) : ''}  
      
	</div>
    </MDBRow>
)
}


export default Carte

