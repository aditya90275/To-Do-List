import React from 'react'
import './Item.css'

const Item = (props) => {

  return (
    <div className="container">
      <div className="item">
        {props.task} 
      </div>
    </div>
  )
}

export default Item
