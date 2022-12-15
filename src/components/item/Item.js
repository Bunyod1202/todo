
import { toast } from "react-toastify";
import { Button } from "../ui/button/Button";
import { Input } from "../ui/input/Input";
import "./item.scss";

export const Item = ({todo,setTodo,setEdits, item ,editTodo}) => {

  const remuveTodo = (item) => {
    setTodo(todo.filter(itm => {
       toast.error(`${itm.text} Delite sucsses !`, {
      position: toast.POSITION.TOP_RIGHT
    });
      return itm.id !== item.id
    }))
   

    
    setEdits(true) 
  }
  
  

  return (
    <div key={item.id} className="list-item">
    <div class="form-check form-switch">
      <Input
        class="form-check-input"
        defaultChecked={item.done}
        type="checkbox"
        aria-label="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label
        class="form-check-label"
        for="flexSwitchCheckDefault"
      ></label>
    </div>
      <p className="title">{item.text}</p>

    <div className="btn-wrapper">
      <Button
        onClick={(evt) => editTodo(item, evt)}
        className="edit btn btn-dark me-2"
      >edit</Button>
      <Button
        onClick={()=> remuveTodo(item) }
        className="delete btn btn-danger"
        type="button"
      >del</Button>
    </div>
  </div>
  );
};

