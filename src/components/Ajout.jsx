import React, { useState } from 'react'
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
		<div className="container">
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
                className="row"
            >
                <div className="top col-md-4"></div>
                <div className="top col-md-4">
                    <table>
                        <tr>
                            <td>Produit</td>
                            <td> <input type="text" name="nom" value={product.nom} onChange={handleInputChange}/> </td>
                        </tr>
                        <tr>
                            <td>Prix</td>
                            <td> <input type="text" name="prix" value={product.prix} onChange={handleInputChange}/> </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><textarea name="" id="" cols="30" rows="10" name="desc" value={product.desc} onChange={handleInputChange}></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="file" name="fich" value={product.fich} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <button className="btn btn-info">Ajouter</button> 
                        </tr>
                    </table>
                
                </div>
                            

            </form>
		</div>
	)
}



export default Ajout;