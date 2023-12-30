import React from 'react'

function InputBox(props) {
    const {handleTask} = props;
    const [inputValue,setValue] = useState("");
    const handleValue=(e)=>{
        setValue(e.target.value);
    }
  return (
    <div className='inputBox'>
                <input type="text" placeholder='Enter Your Tasks...' value={inputValue} onChange={handleValue} />
                <button onClick={handleTask()}>Add Task</button>
            </div>
  )
}

export default InputBox