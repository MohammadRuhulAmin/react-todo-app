import React,{useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
 const Content = () => {
   const [items,setItems] = useState([
        {
            id:1,
            checked:false,
            item :'Select One Half of potetos'
        },
        {
            id:2,
            checked:false,
            item:'select Totamato'
        },{
            id:3,
            checked:false,
            item:'select Some fresh vegitable!'
        }
       ]
   )
//    npm i react-icon
  return (
    <main>
        <ul>
            {
                items.map((item)=>(
                    <li className='item' key={item.id}>
                        <input 
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                       <FaTrashAlt 
                            role="button" 
                            tabIndex="0"
                        />
                    </li>
                ))
            }
        </ul>
    </main>
  )
}
export default Content