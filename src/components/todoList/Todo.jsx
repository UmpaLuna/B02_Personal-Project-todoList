import { memo } from 'react';
import styles from './Todo.module.css'

 function Todo({todoList,setTodoList}) {

    const onSubmitHandler =(el)=>{
        el.isDone ? el.isDone= false : el.isDone = true;
        setTodoList([...todoList]);
    }
    const onRemoveHandler=(id)=>{
        console.log(id)
       const newTodoList = todoList.filter(target=>{
            return target.id !== id;
        })
        setTodoList(newTodoList);
    }
  return (
    <div className={styles['list-container']}>
        <h2>Working... 🎉</h2>
        <div className={styles['list-wrapper']}>
        {
            todoList.map(el=>{
                return(
                 el.isDone ===false 
                 &&<TodoList key={el.id} el={el} id={el.id} onSubmitHandler={onSubmitHandler} onRemoveHandler={onRemoveHandler}/>
                )
            })
        }
        </div>
        <h2>Done... 🎁</h2>
        <div className={styles['list-wrapper']}>
        {
            todoList.map(el=>{
                return(
                    el.isDone&& <TodoList key={el.id} el={el} id={el.id} onSubmitHandler={onSubmitHandler} onRemoveHandler={onRemoveHandler}/>
                )
            })
        }
        </div>
    </div>
  )
}

function TodoList({el,id,onSubmitHandler,onRemoveHandler}){
    return(
        <div className={styles['todo-container']}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <div className={styles['button-set']}>

                <button onClick={()=>{
                    onRemoveHandler(id)
                }} className={`${styles['todo-delete-button']} ${styles['button']}`}>삭제</button>

                <button onClick={()=>{onSubmitHandler(el)}} className={`${styles.button} ${styles['add-button']}`}>
                    {el.isDone ?'취소' : '완료' }
                    </button>
            </div>
        </div>
    )
}
export const MemoTodo = memo(Todo)