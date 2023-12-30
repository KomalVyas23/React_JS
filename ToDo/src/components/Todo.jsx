import React from 'react'
import { useState } from 'react';
import InputBox from './InputBox';
import List from './List';

function Todo(){
   
    const [tasksArr,setTasksArr] = useState([]);
   
    const handleTask=()=>{
        let newTasksArr=[...tasksArr,inputValue];
        setTasksArr(newTasksArr);
        setValue("");
    }
    return(
        <div>
          <InputBox fn={handleTask}/> 
           <List tasksArr={tasksArr} /> 
        </div>
    )
}

export default Todo