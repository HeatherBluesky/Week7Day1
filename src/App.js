import './App.css';
import React, {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    {name: "Clean Car",  isComplete: false, priority: "Low"},
    {name: "Car MOT",  isComplete: false, priority:"High"},
    {name: "Do Laundry", isCcompleted: true, priority: "High"}
  ])
  const [newTodo, setNewTodos] = useState ("")//({name: "",  completed: false, priority: ""})

  const todoNodes = todos.map((todo, index) => {
    return(
      <li key={index} className={todo.isComplete? "Completed": "not-completed"}><span><b>{todo.name}{todo.isComplete}</b></span>
      {todo.isComplete ? <span className ='completed'>Completed</span> : <button onClick={() => {completeTodo(index)}}>Completed</button>}
     </li>
    )
  });

  const handleTodoInput = (event) =>{
    const copyItem = {...newTodo}
    copyItem.name = event.target.value
    copyItem.completed = event.target.value
    setNewTodos(event.target.value)
  }

  const handlePriority = (event) => {
    const copyItem = {...newTodo}
    copyItem.priority = event.target.value
    setNewTodos(event.target.value)

  }

  const saveNewTodo = (event) => {
    event.preventDefault()
    const copyTodos = [...todos]
    copyTodos.push({name: newTodo, isCcompleted: false, priority: newTodo.priority})
    setNewTodos("")
    setTodos(copyTodos)
  }

  const completeTodo = (index) => {
    const copyTodos = {...todos}
    copyTodos[index].completed = true
    setTodos(copyTodos)
  }

  return (
    <div className="App">

      <h1>To Do List</h1>
      <ul>
        {todoNodes}
         </ul>
         <form onSubmit={saveNewTodo}>
          <label htmlFor="new-todo">Add a New Task:</label>
          <input id="new-todo" type="text" value={newTodo.name} onChange={handleTodoInput}/>
          <input type= "Submit" value ="Add New ToDo"/>
          <input type="radio" value="High" name="priority" onChange={handlePriority}/> High
          <input type="radio" value="Low" name="priority" onChange={handlePriority}/> Low
        </form>
        
     
    </div>
  );
}

export default App;
