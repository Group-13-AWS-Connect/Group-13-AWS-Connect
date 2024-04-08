import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/20/solid";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  
  if (edit.id) {
    return (
      <div className="todo-card">
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      </div>
    );
  }

  return todos.map((todo, index) => (
    <div
      className={`todo-card ${todo.isComplete ? 'complete' : ''}`}
      key={index}
    >
      <div className="todo-text" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='todo-icons'>
        <XCircleIcon
          onClick={() => removeTodo(todo.id)}
          className='icon w-6 h-6'
        />
        <PencilSquareIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='icon w-6 h-6'
        />
      </div>
    </div>
  ));
};

export default Todo;
