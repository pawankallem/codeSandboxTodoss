import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";
import { v4 as uuid } from "uuid";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    let todoItem = {
      todo,
      status: false,
      id: uuid()
    };
    let action = addTodo(todoItem);
    dispatch(action);
    console.log(todoItem);
  };

  return (
    <div>
      <h1>Add Todo </h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Your Todo"
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
