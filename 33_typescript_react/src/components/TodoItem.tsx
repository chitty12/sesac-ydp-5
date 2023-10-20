import React from 'react';
import { ToDoItem } from '../types/types';

// {todo} => {todo: xxx}
interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        ></input>
        {todo.text}
      </label>
    </li>
  );
}
