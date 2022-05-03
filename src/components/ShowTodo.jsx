import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export const ShowTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClicks = (e) => {
    let todoItem = {
      ...e,
      status: true
    };
    const action = addTodo(todoItem);
    dispatch(action);
    console.log(todoItem);
  };

  return (
    <div>
      <h1>Show Todo </h1>
      {todos.map((el) => {
        return (
          <div key={el.id}>
            <span>{el.todo}</span>
            <button
              onClick={() => {
                handleClicks(el);
              }}
            >
              {el.status == false ? "False" : "True"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
