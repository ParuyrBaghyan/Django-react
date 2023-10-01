import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://logrocket-assets.io/img/logo.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
// This is pretty much static HTML represented under JSX. Nothing much of note here.

// Working on the Creating New Student form
// Now, let’s change our strategy and build the next components from the innermost to the outermost ones. In the same components folder, create a new file called NewStudentForm.js and add the following:
