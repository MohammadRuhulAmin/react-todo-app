

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';
import AddItem from './AddItem';
function App() {
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
    },
    {
        id:3,
        checked:false,
        item:'select Some fresh vegitable!'
    },
    {
      id:4,
      checked:true,
      item:'Get some tomatoes,green vegitables'
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
  return (
    <div className="App">
      <Header title = "Grocery Item List"/>
      <AddItem/>
      <Content
        items = {items}
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
