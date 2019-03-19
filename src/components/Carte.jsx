import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './Carte.css'


const Carte = props => (
    <MDBRow>
    <div className="card-deck">    
        {props.products.length > 0 ? (                
            props.products.map(product => (
                <MDBCol md="4">
                <div className="card" key={product.id}>
                    <img src={product.fich} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.nom}</h5>
                        <p className="card-text">{
                            (product.desc.length > 200)?product.desc.substring(0, 117).append('...'):product.desc}</p>
                        <span id="price">{product.prix}Ar</span>
                    </div>
                    <div className="card-footer">
                        <span id="heart" value="0"></span> <label id="coeur">❤<input type="button"
                            onClick = { () =>{
                                var n=parseInt(document.getElementById("heart").value);
                                n = n + 1;
                                document.getElementById("heart").innerHTML = n;
                            }

                            }
                        /></label>
                    </div>
                </div>  
                </MDBCol>    
                ))
      ) : ''}  
      
	</div>
    </MDBRow>
)

export default Carte
