import { useState } from 'react';
import './App.css';
import ToWork from './components/ToWork';

function App() {
  let [toDoList,setToDo] = useState([]);
  let [title,setTitle] = useState('');
  let [text,setText] = useState('');

  const inputValueFunc = (e,state)=>{
    state(e.value)
  }
  const addTodoContext = (e)=>{
    const newTodo = {
      title,
      text,
      id : toDoList.length,
      isDone : false
    }
    toDoList.push(newTodo )
    setToDo([...toDoList]);
    setTitle('') // title을 ''으로 바꿀까?
    setText('')// text를 ''으로 바꿀까?
  }


  return (
    <div className="App">
      <header className="title">
        <div>My Todo List</div>
        <div>React</div>
      </header>

      <div className="form-control-container">
        <div className="input-container">
         <span>제목</span>
          <input value={title} onChange={function(e){
             inputValueFunc(e.target,setTitle)
          }}
         type="text" />
         <span>내용</span>
          <input value={text} onChange={function(e){
             inputValueFunc(e.target,setText);
          }}
         type="text" />
        </div>

        <button onClick={addTodoContext}
         className='button add-button'>추가하기</button>
      </div>
      
      <div className="list-container">
        <h2 className="list-title">Working..🔥</h2>

       {/* 할 일들 */}
        <div className="list-wrapper">
          {
            toDoList.map(el=>{
              return el.isDone === false && <ToWork key={el.id} context = {el} setToDo={setToDo} toDoList={toDoList}/>
            })
          }
        </div>
        
        {/* 끝내놓은 일들.. */}
        <h2 className="list-title">
        Done..! 🎉
        </h2>
        <div className="list-wrapper">
          {
            toDoList.map(el=> {
            return  el.isDone && <ToWork key={el.id} context = {el} setToDo={setToDo} toDoList={toDoList} />
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
