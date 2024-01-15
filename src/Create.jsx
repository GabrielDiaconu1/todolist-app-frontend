/**
 * author: Gabriel Diaconu
 * date: January 2024
 * purpose: The Create component imports the 'React' library, 'useState' hook for state management, and 'axios' for HTTP requests. It features an input field for entering a task and a button to add the task. The component maintains a state variable 'task' and utilizes the 'handleAdd' function to make a POST request to 'http://localhost:3001/add' with the entered task data. Upon successful addition, the page is reloaded. The component is exported as the default export of the module.
 * **/

// Importing the 'React' library, which is necessary for creating React components
import React from 'react';

// Importing the 'useState' hook from the 'react' library, which allows functional components to manage state
import { useState } from 'react';

// Importing the 'axios' library for making HTTP requests
import axios from 'axios';

// Defining the 'Create' functional component
function Create() {
    // Using the 'useState' hook to create a state variable 'task' and a function 'setTask' to update its value
    const [task, setTask] = useState();

    // Handling the 'Add' button click event
    const handleAdd = () => {
        // Making a POST request to 'http://localhost:3001/add' with the 'task' data
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                // Reloading the page after successful addition of the task
                location.reload();
            })
            .catch(err => console.log(err));
    }

    // Returning a div containing an input field for entering a task and a button to add the task
    return (
        <div className="create_form">
            {/* Input field for entering a task with an onChange event to update the 'task' state */}
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            
            {/* Button to trigger the 'handleAdd' function when clicked */}
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

// Exporting the 'Create' component as the default export of this module
export default Create;
