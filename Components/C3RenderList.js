import React, {useState} from 'react'
// Challenge 3: Dynamic List Rendering

// *   **Objective**: Render a list of items (strings) dynamically from an array in the state.
// *   **Key Concepts**: Rendering lists, using the `map` function.

export default function RenderList(){
    const [list, setList]= useState([])
    const [inputValue, setInputValue] = useState('');

    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddItem = () => {
        setList([...list,inputValue]);
        setInputValue('')
    }

    return(
        <div>
            <h3>Challenge 3</h3>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <br></br>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
    }
//done