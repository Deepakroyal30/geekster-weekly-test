import React from 'react';
import './App.css';
import Heading from './Home'; // Import the Heading component using a relative path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading /> {/* Render the Heading component */}
      </header>
    </div>
  );
}

export default App;
