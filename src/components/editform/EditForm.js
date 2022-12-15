import { Button } from '../ui/button/Button';
import { Input } from '../ui/input/Input';
import'./editform.scss';

export const EditForm = ({setTitleEdit,setEdits,edTodo,editor}) => {
  const btnEditsTodo = (evt) => {
    evt.preventDefault();
    setEdits(true) 
    edTodo(editor)
  
  
  }
  return (
    <form className="form input-group">
              <Input
                className="todo-input form-control"
                onChange={item => setTitleEdit(item.target.value)}
                type="text"
                aria-label="edit"
              />
              <Button
                className="btn btn-success"
                onClick={btnEditsTodo}
                type="submit"
              >edit</Button>
            </form>  
  );
};

