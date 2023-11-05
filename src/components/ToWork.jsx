import React from 'react'

function ToWork({context,setToDo,toDoList}) {
// 버튼 클릭하면 isDone을 true 한번더 누르면 false 

   const onClickBtnIsDoneHandler = (e)=>{
    context.isDone === false ? onClickEventIsDoneWorkHandler(true) :  
    onClickEventIsDoneWorkHandler(false);
   }
   

   const onClickEventIsDoneWorkHandler = (boolean)=>{
             context.isDone = boolean      
            setToDo([...toDoList]);
   }

   const onClickRemoveWorkHandler = ()=>{
        const findRemoveTargetOfToDoList = toDoList.findIndex(target=>{
            return target.id === context.id;
        })
        toDoList.splice(findRemoveTargetOfToDoList,1);
        setToDo([...toDoList]);
   }
  return (
    <>
    {
    <div className="todo-container">
            <div>
              <h2 className="todo-title">
                {context.title}
              </h2>
              <div>{context.text}</div>
            </div>
            <div className="button-set">
              <button onClick={onClickRemoveWorkHandler}
              className="button todo-delete-button">삭제하기</button>

              <button onClick={onClickBtnIsDoneHandler}
              className="button todo-complete-button">
                {
                     context.isDone === false ? '완료' : '취소'
                }
                </button>
            </div>
          </div>
        }
        </>
  )
}

export default ToWork