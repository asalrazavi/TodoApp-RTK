import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { getAsyncTodos } from "../../features/todo/todoSlice.js";

// const todos = [
//   { id: 1, text: "Buy milk", completed: false },
//   { id: 2, text: "Walk the dog", completed: false },
// ];

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos, loading, error);

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return (
    <div>
      <h2>TodoList</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="list-group">
          {todos && todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <p>No todos available</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
