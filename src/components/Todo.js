import { DeleteOutlined } from '@ant-design/icons'
import { CheckOutlined } from '@ant-design/icons'
function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div style={{display:"flex", justifyContent:"space-between"}}>
          {todo.isCompleted ?
          <span className="todo">Done</span>:
          <span></span>
        }
        {todo.text}
        <div>
          <button className="completeBtn" onClick={() => completeTodo(index)}><CheckOutlined /></button>
          <button className="delBtn" onClick={() => removeTodo(index)}><DeleteOutlined /></button>
        </div>
      </div>
    );
  }
  

export default Todo