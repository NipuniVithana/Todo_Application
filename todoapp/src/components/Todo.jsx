import { useState } from 'react';

import Footer from './Footer';
import styles from './footer.module.css';
import Form from './Form';
import TodoList from './TodoList';

function Todo() {
  
  const [todos,setTodos] = useState([]);
  const CompletedTodos=todos.filter((todo)=>todo.done).length
  const totalTodos = todos.length
  
  return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer className = {styles.footer} CompletedTodos={CompletedTodos} totalTodos={totalTodos}/>
    </div>
  )
}

export default Todo