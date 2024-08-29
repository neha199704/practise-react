import { useState } from "react";

function AllTypeInputField() {
  const [form, setForm] = useState({
    uName: "",
    email: "",
    number: "",
    checkbox: false,
    radio: "",
    select: "",
    password: "",
    date: "",
    color: "",
    range: "",
    textarea: "",
    submit: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  //console.log("form: ", form);
  return (
    <div className="main">
      <h1 className="inputDiv">Form</h1>
      <div className="inputDiv">
        <p htmlFor="uName"> Name : {form.uName}</p>
        <input type="text" name="uName" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>E-mail : {form.email}</p>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Number : {form.number}</p>
        <input type="number" name="number" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Checkbox </p>
        <input type="checkbox" name="checkbox" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Radio</p>
        <input
          type="radio"
          name="radio"
          value="Option 1"
          onChange={handleChange}
        />
        <input
          type="radio"
          name="radio"
          value="Option 2"
          onChange={handleChange}
        />
        <input
          type="radio"
          name="radio"
          value="Option 3"
          onChange={handleChange}
        />
      </div>
      <div className="inputDiv">
        <p>Select : {form.select}</p>
        <select name="select" onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div className="inputDiv">
        <p>Password : {form.password}</p>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Date : {form.date}</p>
        <input type="date" name="date" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Color : {form.color}</p>
        <input type="color" name="color" onChange={handleChange} />
      </div>

      <div className="inputDiv">
        <p>Range : {form.range}</p>
        <input type="range" name="range" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <p>Textarea : {form.textarea}</p>
        <textarea name="textarea"></textarea>
      </div>
      <div className="inputDiv">
        <p>Submit</p>

        <input
          type="submit"
          value="submit"
          onClick={() => {
            console.log(form);
          }}
        />
      </div>
    </div>
  );
}
export default AllTypeInputField;
