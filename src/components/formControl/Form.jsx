import React, { memo, useState } from 'react'
import styles from './Form.module.css'
import Todo from '../todoList/Todo';
function Form() {
  
  const [title,setTile] = useState('');
  const [body,setBody] =  useState('');
  const [todoList,setTodoList] = useState([]);

  const inputValueFunc = (e,state)=>{
    state(e.value);
  }
  
  const addTodoEventHandler =()=>{
    const newTodo = {
      id : new Date(),
      title,
      body,
      isDone:false
    }
    setTodoList([...todoList,newTodo]);
    setTile('');
    setBody('');
  }

  return (
    <>
    <div className={styles['form-control']}>
      <div className={styles['input-container']}>
        제목 <input onChange={(e)=>{
          inputValueFunc(e.target,setTile);
        }} value={title} type="text" /> 할일 <input onChange={(e)=>{
          inputValueFunc(e.target,setBody);
        }} value= {body} type="text" />
      </div>
      <button onClick={addTodoEventHandler}
      className={`${styles.button} ${styles.submit}`}>Add</button>
    </div>
    <Todo todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}

export default Form