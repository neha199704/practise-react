import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";
//import Products from "./array";
// import AllTypeInputField from "./formAllInput";
//import ToDo from "./to-do";
//import ArrayCrudTodo from "./form";

import NetflixForm from "./netflixForm";
// import ToggleExample from "./toggleExample";
// import SampleGreeting from "./App.jsx";
// import ParentTag from "./exampleFragment.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <ToastContainer />
      {/* <ArrayCrudTodo /> */}
      <NetflixForm />
      {/* <SampleGreeting />
      <ParentTag></ParentTag> */}
      {/* <ToggleExample /> */}
      {/* <AllTypeInputField /> */}
      {/*  <ToDo /> */}
      {/* <Products /> */}
    </StrictMode>
  </>
);
