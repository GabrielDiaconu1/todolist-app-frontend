/**
 * author: Gabriel Diaconu
 * date: January 2024
 * purpose: React application's entry point is established. The 'React' and 'ReactDOM' libraries are imported for creating and rendering React components in the DOM. The 'App' component, assumed to be in the same directory and located in the 'App.jsx' file, is imported. Styling is applied through the 'index.css' file. The 'ReactDOM.createRoot' method is employed to create a React root, and the 'App' component is rendered within it. This root is attached to the HTML element with the id 'root.' The usage of 'React.StrictMode' ensures additional development checks. This code essentially sets up the foundation for rendering the 'App' component within a React root, adhering to best practices and development standards.
 * **/


// Importing the 'React' library, which is necessary for creating React components
import React from 'react';

// Importing the 'ReactDOM' library for rendering React components in the DOM
import ReactDOM from 'react-dom/client';

// Importing the 'App' component from the './App.jsx' file (assumed to be in the same directory)
import App from './App.jsx';

// Importing the 'index.css' file for styling (assumed to be in the same directory)
import './index.css';

// Creating a React root using 'createRoot' and rendering the 'App' component inside it
// The root is attached to the element with the id 'root' in the HTML document
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the 'App' component with 'React.StrictMode' for additional development checks
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
