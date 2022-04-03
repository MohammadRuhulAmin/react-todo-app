import React,{useState} from 'react'
import ItemList from './ItemList'
 const Content = ({items,handleCheck,handleDelete}) => {
//    npm i react-icon
  return (
    <main>
        {(items.length)?(
            <ItemList 
                items={items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        ):(
            <label style={{marginTop:'2rem'}}>No Items Left to Buy for now</label>
        )
    }
        
    </main>
  )
}
export default Content