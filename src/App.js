import React, { useEffect, useState } from 'react';
import './Todo.css';
import List from './components/List';
import item from './components/item'; 
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';


const SAVED_ITEMS = "savedItems";

function App() {

const [showModal, setShowModal] = useState(false);
const [items, setItems] = useState([]);
const [selectedDate, setSelectedDate] = useState('');

useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
        setItems(savedItems);
    }
}, [])

useEffect(()=> {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
}, [items])


function onAddItem(text) {

    let it = new item(text);

    setItems([...items, it]);
    onHideModal(); 
}

function onItemDeleted(item) {
    let filterdItems = items.filter(it=>it.id != item.id);
    setItems(filterdItems);
}

function onDone(item) {
    let updatedItems = items.map(it=> {
        if(it.id === item.id) {
            it.done = !it.done;
        }
        return it;
    })

    setItems(updatedItems);
}

function onHideModal (e) {
    setShowModal(false);
}

    return (<div className='container'>
       
        <header className='header'><h1>Novo Lembrete</h1> <button onClick={()=>{setShowModal(true)}} className='addButton'>+</button></header>
     <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

    <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>);


}



export default App;