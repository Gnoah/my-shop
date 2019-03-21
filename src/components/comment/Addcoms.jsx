import React, { useState } from 'react'

var Addcoms = props => {

	const initialFormState = { id: null, coms: '' }
	const [ comment, setComment ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setComment({ ...comment, [name]: value })
    }
    
	return (
            <form 
                onSubmit={event => {
                    event.preventDefault()
                    
                    if (!Comment.coms) return
                        
                            props.addComment(comment)
                            props.setCompt(props.compt +1)
                            setComment(initialFormState)
                        			
                }}
            >                        
                <table>
                    <tbody>
                        <tr>
                            <td><input type="text" name="coms" value={Comment.coms} onChange={handleInputChange}/></td>                                
                            <td><button id="bout" className="btn btn-info">Comment</button></td>
                        </tr>  
                    </tbody>                         
                </table> 
            </form>
	)
}



export default Addcoms;