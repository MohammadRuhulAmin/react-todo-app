import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer>
      <p>{length} {(length === 1)?"List Item":"List Items"}</p>
    </footer>
  )
}

export default Footer