/**
 * author: Gabriel Diaconu
 * date: January 2024
 * purpose:  The App component imports the 'useState' hook from the 'react' library for state management and includes styling from the 'App.css' file. The 'Home' component is imported from the './Home' file (assumed to be in the same directory), and the 'App' component simply returns a div containing the 'Home' component. The 'App' component is exported as the default export of this module.
 * **/
// Importing the 'useState' hook from the 'react' library, which allows functional components to manage state
import { useState } from 'react';

// Importing the 'App.css' file for styling (assumed to be in the same directory as this file)
import './App.css';

// Importing the 'Home' component from the './Home' file (assumed to be in the same directory as this file)
import Home from './Home';

// Defining the 'App' functional component
function App() {
  // Returning a div containing the 'Home' component
  return (
    <div>
      <Home />
    </div>
  );
}

// Exporting the 'App' component as the default export of this module
export default App;
