import React, { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import AffCom from './Displaycoms'
import './Addcom.css'


const Comment= props => {
    const initialFormState = []
    const [ coms, setCom ] = useState(initialFormState)
    const [ compt, setCompt ] = useState(0)
    const addCom = (coms,test) => {
      setCom(coms.concat([test]))

    }
    

   
    return(

            <button
            onClick={()=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div id="bt" className='custom-ui'>
                          <div className="fermer">
                            <button id="flot" onClick={onClose}>X</button>
                          </div>
                          <div>
                          <form id='coms'
                            onSubmit={
                              (b)=>{
                                b.preventDefault()
                                var test=document.forms['coms'].elements['input'].value
                               //  setCom(coms.concat([test]))
                               addCom(coms,test)
                                document.getElementById('io').innerHTML+=test+'<br/>'
                                document.getElementById('entre').value=''
                                setCompt(compt+1)
                              }
                            }
                          >
                              
                              <input name='input' type="text" id='entre' placeholder={coms.commentaire}/>

                              <button id="com">comment</button>
                              
                          </form>
                          </div>
                          <div id='io'></div>
                          <AffCom coms={coms}/>
                        </div>
                      );
                    }
                  });
            }}
            > 
            comment {compt}</button>     
    )   
        
}



export default Comment