import  { useState } from "react";

let GlobalID = 0;

const Hell = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTask("");
    setTodos((oldTodos) => [...oldTodos, { todo: task, id: GlobalID++ }]);
  };

  const deleteTodo = (itemId) => {
    setTodos(todos.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button type="submit">Add To Do</button>
      </form>

      <ul>
        {todos.map((item) => (
          <div key={item.id}>
            <li>
              {item.todo} {item.id}
            </li>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Hell;


// App.jsx
import React from 'react'
import Question from './Question'
import data from './data.js' // Import data from data.js

const App = () => {
	return (
		<main>
			<div class="container">
				<h3>FAQ</h3>
				<section class="info">
					<Question title="hello" />
				</section>
			</div>
		</main>
	)
}

export default App


const getselect = (e) =>{
  setSelected(e.target.value)
}
