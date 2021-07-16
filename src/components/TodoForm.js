import { useState } from "react";

function TodoForm({addTodo, handleRemoveItem}) {
    const [value, setValue] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }
    
    return (
        <form className="input-field" onSubmit={handleSubmit}>
        <input placeholder="Enter your Task" type="text" className="input" value={value} onChange={e=>setValue(e.target.value)}/>
    </form>
)
}

export default TodoForm;