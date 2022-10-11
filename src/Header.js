import {React, useState } from 'react';
import './Header.css'
import Item from './Item'

const Header = () => {
  const[inputList,setInputList]=useState([]);
  const[items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }

  const listofitems=()=>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    })
    setInputList("");
  }

  return (
    <>
      <h1 className='heading'>TO-DO-LIST</h1>
      <div className="containerL">
        <input value={inputList} onChange={itemEvent} className="task" placeholder='Enter the task' />
        <button className="add" onClick={listofitems}>Add</button>
      </div>
      {
        items.map((itemval)=>{
          return <Item task={itemval}/>
        })
      }
    </>
  )
}

export default Header
