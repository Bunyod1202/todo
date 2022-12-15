import { Item } from "../item";
import "./list.scss";

export const List = ({todo,setTodo,setEdits,editTodo}) => {

  return (
       <div className="list">
        {
          todo.map((item) => {
            return (
              <Item key={item.id}   item={item} todo={todo} setEdits={setEdits} setTodo={setTodo} editTodo={editTodo} />
            )
          })
        }
      </div>
  );
};

