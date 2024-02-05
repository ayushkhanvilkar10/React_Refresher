import React,{ useState } from 'react';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const handleAddTodo = () => {
        if(inputValue.trim()!== ''){
            setTodoList([...todoList,inputValue]);
            setInputValue('');
        }
    }

    const handleDeleteTodo = (index) => {
        setTodoList(todoList.filter((_,i) => i !== index));
    }

    return(
        <div>
            <h1>
                Here is your Todo List
            </h1>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter todo item'
            />
            <button onClick={handleAddTodo}>
                Add
            </button>
            <ul>
                {todoList.map((todo, index)=>
                (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>
                            Delete
                        </button>
                    </li>
                )
                )}
            </ul>
        </div>

    );
}

export default TodoList;
