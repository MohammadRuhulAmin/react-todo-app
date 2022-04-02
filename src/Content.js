import React,{useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
 const Content = () => {
   const [items,setItems] = useState([
        {
            id:1,
            checked:true,
            item :'Select One Half of potetos'
        },
        {
            id:2,
            checked:true,
            item:'select Totamato'
        },{
            id:3,
            checked:false,
            item:'select Some fresh vegitable!'
        }
       ]
   )
   const handleDelete = (id)=>{
        const listItems = items.filter((item)=>item.id !== id)
        setItems(listItems)
        localStorage.setItems('shoppinglist',JSON.stringify(listItems))

    }
   const handleCheck = (id)=>{
      const listItems = items.map((item)=>item.id === id?{
          ...item,checked:!item.checked}:item)
          setItems(listItems)
          localStorage.setItems('shoppinglist',JSON.stringify(listItems))
   }
//    npm i react-icon
  return (
    <main>
        {(items.length)?(
            <ul>
            {
                items.map((item)=>(
                    <li className='item' key={item.id}>
                        <input 
                            type="checkbox"
                            onChange={()=>handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                         style={(item.checked)?{textDecoration:'line-through'}:null}
                        onDoubleClick={()=> handleCheck(item.id)}
                        >{item.item}</label>
                       <FaTrashAlt 
                            onClick={()=>handleDelete(item.id)}
                            role="button" 
                            tabIndex="0"
                        />
                    </li>
                ))
            }
        </ul>
        ):(
            <label style={{marginTop:'2rem'}}>No Items Left to Buy for now</label>
        )
    }
        
    </main>
  )
}
export default Content