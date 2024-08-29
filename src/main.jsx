import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import AllTypeInputField from "./formAllInput";
// import ToggleExample from "./toggleExample";
// import SampleGreeting from "./App.jsx";
// import ParentTag from "./exampleFragment.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      {/* <SampleGreeting />
      <ParentTag></ParentTag> */}
      {/* <ToggleExample /> */}
      <AllTypeInputField />
    </StrictMode>
  </>
);
