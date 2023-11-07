import React, { useState } from "react";
import styles from "./Form.module.css";
import { MemoTodo } from "../todoList/Todo";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todoList, setTodoList] = useState([]);

  // 함수는 동사+명이다.
  const handleClickAddToDo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]); // 조금더 깔끔한
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className={styles["form-control"]}>
        <div className={styles["input-container"]}>
          <div>
            <label>제목</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
            />
          </div>

          <div>
            <label>할일</label>
            <input
              onChange={(e) => setBody(e.target.value)}
              value={body}
              type="text"
            />
          </div>
        </div>
        <button
          onClick={handleClickAddToDo}
          className={`${styles.button} ${styles.submit}`}
        >
          Add
        </button>
      </div>
      <MemoTodo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default Form;
