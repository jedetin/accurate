
import React from 'react';
import config from './config';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Yaatharth</h1>
        <p>
          Submit your opinions:
        </p>
        
          <form>
  <label>
    Name:
    <input type="text" name="name" /><br></br>
    Contact:<input type="text" name="Contact" />
  </label>
  <br></br>
  Please enter your Opinion:
  <textarea name="Your Opinion" placeholder="Opinion">
  
</textarea><br></br>
  <input type="submit" value="Submit" />
</form>
      
      </header>
