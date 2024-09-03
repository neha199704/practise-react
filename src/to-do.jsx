import { useState } from "react";
import "./App.css";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emoji, setEmoji] = useState(false);
  //   const [selectIndex, setSelectIndex] = useState(null);

  const addTodo = () => {
    if (title === "" || description === "") return;

    const newTodo = {
      title,
      description,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const deleteListItem = (index) => {
    const filter = todos.filter((elem) => elem != todos[index]);
    console.log(filter);
    setTodos(filter);
  };

  const handleEdit = (index) => {
    setTitle(todos[index].title);
    setDescription(todos[index].description);
  };

  const handleEmoji = (index) => {
    const find = todos.find((elem) => elem != todos[index]);
    console.log(find);
    console.log(index);
  };

  const TestComp = ({ index }) => (
    <div>
      <button onClick={() => handleEmoji(index)}>
        <i className="fa-solid fa-heart"></i>
      </button>
      <button onClick={() => handleEmoji(index)}>
        <i className="fa-solid fa-thumbs-up"></i>
      </button>
      <button>
        <i className="fa-solid fa-face-grin-tears"></i>
      </button>
      <button>
        <i className="fa-regular fa-face-surprise"></i>
      </button>
      <button>
        <i className="fa-regular fa-face-smile-wink"></i>
      </button>
      <button>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
  return (
    <div>
      {emoji && <TestComp />}
      <h1>To-Do</h1>
      <div className="div">
        <input
          name="title"
          type="text"
          value={title}
          placeholder="Add Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="description"
          value={description}
          placeholder="Add Description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ul className="div">
        {todos.map((todo, index) => (
          <li className="box" key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div>
              <button
                onClick={() => {
                  setEmoji(!emoji);
                  //   setSelectIndex === index;
                }}
              >
                <i className="fa-solid fa-face-grin"></i>
              </button>
            </div>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteListItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDo;
