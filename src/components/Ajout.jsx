import React, { useState } from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import './Ajout.css'
//import { Table } from '@material-ui/core';
//import {MDCFormField} from '@material/form-field';

var Ajout = props => {
	const initialFormState = { id: null, nom: '', prix: '', desc: '', fich: '' }
	const [ product, setProduct ] = useState(initialFormState)
	

	const handleInputChange = event => {
		const { name, value } = event.target
		setProduct({ ...product, [name]: value })
	}

	return (
            <form 
                onSubmit={event => {
                    event.preventDefault()
                    
                    if (!product.nom || !product.prix || !product.desc || !product.fich) return
                        if (isNaN(product.prix)){
                            document.getElementById("erreur").innerHTML="Entrer un nombre"
                        }else{
                            document.getElementById("erreur").innerHTML=""
                            props.addProduct(product)
                            props.setCount(props.count +1)
                            setProduct(initialFormState)
                        }				
                }}
            >
                <MDBRow>
                    <MDBCol md="3"> </MDBCol>
                    <MDBCol md="6" style={{ border: "1px solid black"}}>
                        
                        <table>
                            <tbody>
                            <tr>
                                <td>Produit</td>
                                <td> <input type="text" name="nom" value={product.nom} onChange={handleInputChange}/> </td>
                            </tr>
                            <tr>
                                <td>Prix</td>
                                <td> <input type="text" name="prix" value={product.prix} onChange={handleInputChange}/><span id="erreur"/> </td>
                            </tr>
                            <tr>
                                <td >Description</td>
                                <td><textarea name="desc" rows="5" name="desc" value={product.desc} onChange={handleInputChange}></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                
                                <td><label id=""> File<input type="file" name="fich" value={product.fich} onChange={handleInputChange}/></label></td>
                            </tr>  
                            </tbody>                         
                        </table><button id="bout" className="btn btn-primary btn-block">A<span id="tex">jouter</span></button>
                        
                    </MDBCol>
                    <MDBCol md="3"> </MDBCol>
                </MDBRow>
               
                            

            </form>
	)
}



export default Ajout;