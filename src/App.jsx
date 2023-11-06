import { useState } from 'react';
import './App.css';
import LayOut from './components/LayOut/LayOut.jsx'
import Form from './components/formControl/Form.jsx'
import Todo from './components/todoList/Todo.jsx'
function App() {


  return (
    <div className="App">
     <LayOut>
      <Form/>
     </LayOut>
    </div>
  );
}

export default App;
