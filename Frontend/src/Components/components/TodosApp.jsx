import { useEffect, useState } from "react";
import { getTodos } from "../api";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
export const TodosApp = () => {
    const [todos, setTodos] = useState([]);
    let data = {
        title: "test",
        status: false,
    };
    // useEffect(() => {
    //   addTodo(data);
    // }, []);
    useEffect(() => {
        getTodos().then((res) => {
            setTodos(res);
        });
    }, []);
    return (<div>
      <h1>Todo App</h1>
      <TodoInput />
      {todos?.map((todo) => {
            return <TodoItem key={todo.id} {...todo}/>;
        })}
    </div>);
};
