import { toast } from "react-toastify";
import { Button } from "../ui/button/Button";
import { Input } from "../ui/input/Input";
import "./form.scss"

export const Form = ({ title, setTitle,setTodo,todo }) => {
  
  const createPost = (evt) => {
    evt.preventDefault();
    const newTodo = [...todo];
    if (title.length) {
      toast.info(`${title} Add sucsses !`, {
        position: toast.POSITION.TOP_RIGHT
      });
      newTodo.push({
        id: Date.now(),
        text: title,
        done: false
      })
    }
    setTodo(newTodo);
    setTitle("");
  }
  return (
    <form className="form input-group">
    <label for="seatch" className="lorems">
      <Input
        id="seatch"
        type="text"
        value={title}
        onChange={item => setTitle(item.target.value)}
        className="todo-input"
        aria-label="search"
    />
   </label>
    <Button
      className="add-todo btn btn-info"
      type="submit"
      aria-label="btn"
      onClick={createPost}
    >Add</Button>
  </form>
  );
};
