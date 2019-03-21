import React from 'react';
import './comment.css'

const LireComs = props => (
  <div>
      
    {
      props.items.map((item, index) => <div id="comment" key={index}>{item}</div>)
    }
    
  </div>
);

export default LireComs;