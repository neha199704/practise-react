import React from "react";
import { Fragment } from "react";

const ParentTag = () => {
  return (
    <>
      <>
        <React.Fragment>
          <p>Hello World</p>
          <Fragment>
            <p>Hello World 2</p>
          </Fragment>
        </React.Fragment>
        <p>Hello</p>
      </>
      <h1>Welcome to VSS</h1>
    </>
  );
};

export default ParentTag;
