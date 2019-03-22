import React from 'react';

const Displaycoms = props => ( 
  <center>
    <table>
        {props.comments.length > 0 ? (                
            props.comments.map(comment => (
                <tr key={comment.id}>
                    <td> {comment.coms} </td>
                </tr>  
                ))
      ) : ''} 
    </table>  
  </center>
)

export default Displaycoms;
