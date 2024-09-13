import React from 'react'

const Box = ({children, title}) => (
  <div style={{
    border: '1px solid black', 
    padding: '10px', 
    margin: "10px", 
    width: "300px", 
    textAlign: 'center'
  }}><h1>{title}</h1>{children}</div>
)

export default Box;