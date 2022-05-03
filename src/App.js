import { AddTodo } from "./components/AddTodo";
import "./styles.css";
import { ShowTodo } from "./components/ShowTodo";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <ShowTodo />
    </div>
  );
}
