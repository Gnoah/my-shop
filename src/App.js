import React, { useState } from 'react'
import './App.css'
import Ajout from './components/Ajout'



var App = () => {
  //ajout
  const productsData = []
  const [products, setProducts] = useState(productsData)
  const [count, setCount] = useState(0)
  
  const addProduct = product => {
	 	product.id = count
		setProducts([ ...products, product ])
  }
  
  

  return (
    <div className="container">      
      <div className="flex-row">
        <div className="flex-large"> 
          
          <Ajout addProduct={addProduct} setCount={setCount} count={count}/>       
          
                
          {/* <Affichage products={products} deleteProduct={deleteProduct} editProduct={editProduct} /> */}
        </div>
      </div>

      

    </div>

  )
}

export default App
