import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import './app.css'
function App() {

    const [todos, setTodos] = useState([])

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }

    const completeTodo = index=>{
        const newTodos = [...todos]
        newTodos[index].isCompleted=true
        setTodos(newTodos);
    }
    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
        console.log("To Remove")
    }

    return (
        <div className="app">
            
            <h1>TODOs Application</h1>
            <div className="todo-list">
                <h2>Please Enter your Task here</h2>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App

