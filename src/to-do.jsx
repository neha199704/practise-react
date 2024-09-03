import { useState } from "react";
import "./App.css";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emojiIndex, setEmojiIndex] = useState(null);

  const addTodo = () => {
    if (title === "" || description === "") return;

    const newTodo = {
      title,
      description,
      emoji: "",
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

  const handleEmoji = (index, emoji) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, emoji } : todo
    );
    setTodos(updatedTodos);
    setEmojiIndex(null);
  };

  const TestComp = ({ index }) => (
    <div>
      <button onClick={() => handleEmoji(index, "❤️")}>❤️</button>
      <button onClick={() => handleEmoji(index, "👍")}>👍</button>
      <button onClick={() => handleEmoji(index, "😂")}>😂</button>
      <button onClick={() => handleEmoji(index, "😲")}>😲</button>
      <button onClick={() => handleEmoji(index, "😉")}>😉</button>
      <button onClick={() => handleEmoji(index)}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
  return (
    <div className="mainDiv">
      {/* {emoji && <TestComp />} */}
      <h1>To-Do</h1>
      <div className="div">
        <input
          className="input"
          name="title"
          type="text"
          value={title}
          placeholder="Add Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="input"
          name="description"
          value={description}
          placeholder="Add Description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ul className="div.">
        {todos.map((todo, index) => (
          <li className="box" key={index}>
            <h3>Title : {todo.title}</h3>
            <p>Description : {todo.description}</p>
            {todo.emoji && <p>{todo.emoji}</p>}
            <div>
              <button
                onClick={() => {
                  setEmojiIndex(emojiIndex === index ? null : index);
                }}
              >
                <i className="fa-regular fa-face-grin"></i>
              </button>
              {emojiIndex === index && <TestComp index={index} />}
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
