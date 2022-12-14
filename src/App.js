import { useState } from "react";
import "./assets/styles/main.scss"

function App() {
  const [todo, setTodo] = useState([])
  const [titleEdit, setTitleEdit] = useState("")
  const [title, setTitle] = useState("")
  const [edits, setEdits] = useState(true)
  let [editor,setEditor] = useState(null)
  let [editorTitle,setEditorTitle] = useState("")
  const createPost = (evt) => {
    evt.preventDefault();
    const newTodo = [...todo];
    if (title.length) {
      newTodo.push({
        id: Date.now(),
        text: title,
        done: false
      })
    }
    setTodo(newTodo);
    setTitle("");
}
  const remuveTodo = (item) => {
    setTodo(todo.filter(itm => itm.id!== item.id))
    setEdits(true) 
  }
  const editTodo = (item,evt) => {
    setEdits(false) 
    setEditorTitle(editorTitle = evt.target.parentElement.parentElement.childNodes[1].textContent)
    setEditor(editor = item)
  }
  const btnEditsTodo = (evt) => {
    evt.preventDefault();
    setEdits(true) 
    edTodo(editor)
  

  }
  const edTodo = (item) => {
    setTodo(todo.map(itm => {
      console.log(editor);
      if (itm.id === item.id) {
        console.log(editor);
        return {
         ...itm,
          text: titleEdit
        }
      }
      return itm
    }))
  }

 
  return (
    <div className="App">
      <h1 className="site-title">Todo</h1>
      <form className="form input-group">
        <input
          type="text"
          value={title}
          onChange={item => setTitle(item.target.value)}
          className="todo-input form-control"
        />
        <button
          className="add-todo btn btn-info"
          type="submit"
          onClick={createPost}
        >Add</button>
      </form>
      {
        edits === true ? <></> :
          <>
            <p className="site-title">
              <strong>{editorTitle} </strong>
               you want to change this information
            </p>
            <form className="form input-group">
              <input
                className="todo-input form-control"
                onChange={item => setTitleEdit(item.target.value)}
                type="text"
              />
              <button
                className="btn btn-success"
                onClick={btnEditsTodo}
                type="submit"
              >edit</button>
            </form>  
          </>
      }
      <div className="list">
        {
          todo.map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    defaultChecked={item.done}
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckDefault"
                  ></label>
                </div>
                  <p className="title">{item.text}</p>
            
                <div className="btn-wrapper">
                  <button
                    onClick={(evt) => editTodo(item, evt)}
                    className="edit btn btn-dark me-2"
                  >edit</button>
                  <button
                    onClick={()=> remuveTodo(item) }
                    className="delete btn btn-danger"
                    type="button"
                  >del</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
