import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./assets/styles/main.scss"
import { EditForm } from "./components/editform";
import { Form } from "./components/form";
import { List } from "./components/list";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo'))||[]);

  const [titleEdit, setTitleEdit] = useState("")
  const [title, setTitle] = useState("")
  const [edits, setEdits] = useState(true)
  let [editor, setEditor] = useState(null)
  let [editorTitle,setEditorTitle] = useState("")
 
  

  const editTodo = (item,evt) => {
    setEdits(false) 
    setEditorTitle(editorTitle = evt.target.parentElement.parentElement.childNodes[1].textContent)
    setEditor(editor = item)
  }
 
 

const edTodo = (item) => {

  setTodo(todo.map(itm => {
    console.log(editor);
  
    if (itm.id === item.id) {
      toast.success(`${itm.text} Edit success !`, {
        position: toast.POSITION.TOP_RIGHT
      });
      return {
       ...itm,
        text: titleEdit
      }
    }
    return itm
  }))
}
  localStorage.setItem("todo",JSON.stringify(todo))
  return (
    <div className="App">
      <h1 className="site-title">Todo</h1>
      <Form title={title} setTitle={setTitle} setTodo={setTodo} todo={todo} />
      {
        edits === true ? <></> :
          <>
            <h2 className="site-title">
              <strong>{editorTitle} </strong>
               you want to change this information
            </h2>
            <EditForm setTitleEdit={setTitleEdit}  setEdits={setEdits} edTodo={edTodo} editor={editor}  />
          </>
      }
      <List
        todo={todo}
        setTodo={setTodo}
        setEdits={setEdits}
        editTodo={editTodo} />
      <ToastContainer/>
{/* Same as */}
      <ToastContainer
        autoClose={2000}
      />
    </div>
  );
}

export default App;
