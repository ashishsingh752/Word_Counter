import React from 'react'
import PropTypes from 'prop-types';

const Footer = (props) => {
    let newStyle={
        color: props.mode==='dark'?'white':'black',
    }
    
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'40px'}}>
      <p style={{color: props.mode==='dark'?'white':'blue', textAlign: 'center' }}  >Made by Ashish Singh</p>
    </div>
  )
}

export default Footer

