import React, { useState } from 'react';


function TodoForm(props) {
    const[text,setText] = useState("");
    const [selectedDate, setSelectedDate] = useState('');


    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    
    }

    function handleDateChange(event) {
        let date = event.target.value;
        setSelectedDate(date);
        
    }


    function addItem(event) {
        event.preventDefault();
        if(text) {
            props.onAddItem(text + " " + selectedDate);
            
            setText("");
            setSelectedDate("");
        }
        
    }

    return (<form>
        
        <input onChange={handleChange} type='text' value={text} placeholder='Digie o lembrete'></input>
        <input type="date" onChange={handleDateChange} />
        <button onClick={addItem}>Criar</button>
    </form>)

}

export default TodoForm;