import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer} from "mdbreact";
import './App.css'
import Ajout from './components/Ajout'
import Carte from './components/Carte'



var App = () => {
  //ajout produit
  const productsData = []
  const [products, setProducts] = useState(productsData)
  const [count, setCount] = useState(0)
  
  const addProduct = product => {
	 	product.id = count
		setProducts([ ...products, product ])
  }
  

  return (
    <MDBContainer>
      <Ajout addProduct={addProduct} setCount={setCount} count={count}/>                
      <Carte products={products}/>         
    </MDBContainer> 
  )
}

export default App
