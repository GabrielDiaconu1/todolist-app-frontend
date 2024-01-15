/**
 * author: Gabriel Diaconu
 * date: January 2024
 * purpose: The Home component imports necessary libraries and components, including 'Create' for adding tasks. The component manages a state variable 'todos' using 'useState' and fetches data from the server on mount with 'useEffect'. It provides features to edit tasks by updating their completion status and delete tasks. The rendered interface includes checkboxes, strike-through for completed tasks, and trash icons for deletion. The 'Home' component is structured to offer a user-friendly To-Do list experience with interactive functionalities for task management.
 * **/


// Importing the 'React' library, which is necessary for creating React components
import React, { useState, useEffect } from 'react';

// Importing the 'Create' component from the './Create' file (assumed to be in the same directory)
import Create from './Create';

// Importing the 'axios' library for making HTTP requests
import axios from 'axios';

// Importing specific icons from the 'react-icons/bs' library
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs';

// Defining the 'Home' functional component
function Home() {
  // Using the 'useState' hook to create a state variable 'todos' and a function 'setTodos' to update its value
  const [todos, setTodos] = useState([]);

  // Using the 'useEffect' hook to fetch todos from the server when the component mounts
  useEffect(() => {
    // Making a GET request to 'http://localhost:3001/get'
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Function to handle editing a todo by updating its 'done' status
  const handleEdit = (id) => {
    // Making a PUT request to 'http://localhost:3001/update/:id'
    axios.put(`http://localhost:3001/update/${id}`)
      .then(result => {
        // Reload the page or update the state as needed
        location.reload();
      })
      .catch(err => console.log(err));
  }

  // Function to handle deleting a todo
  const handleDelete = (id) => {
    // Making a DELETE request to 'http://localhost:3001/delete/:id'
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(result => {
        // Reload the page or update the state as needed
        location.reload();
      })
      .catch(err => console.log(err));
  }

  // Rendering the main content of the 'Home' component
  return (
    <div className="app-container">
      <div className="home">
        {/* Heading for the To-Do list */}
        <h2>To Do List</h2>
        
        {/* Rendering the 'Create' component to add new todos */}
        <Create className="create_form" />

        {/* Conditional rendering based on whether there are todos or not */}
        {todos.length === 0 ? (
          <div>
            {/* Displaying a message when there are no todos */}
            <h2>No Record</h2>
          </div>
        ) : (
          // Mapping over the todos to render each one
          todos.map(todo => (
            <div className="task" key={todo._id}>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {/* Rendering a checkbox icon based on the 'done' status of the todo */}
                {todo.done ?
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                  : <BsCircleFill className='icon' />
                }
                {/* Displaying the task description with a strike-through if 'done' is true */}
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>

              {/* Rendering a trash icon for deleting the todo */}
              <div>
                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Exporting the 'Home' component as the default export of this module
export default Home;
