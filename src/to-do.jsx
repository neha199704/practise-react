import { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
  return (
    <div>
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
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteListItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDo;
