import React from 'react';
import './comment.css'


const LireComs = props => (
  
  <div>
      
    {
      props.items.map((item, index) => <p id="comment" key={index}>{item}<hr/></p>)
    }
    
  </div>
);

export default LireComs;