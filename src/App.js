/* Developed by Prince Paraste */
import React from "react";
import "./App.css";
import UserList from "./Components/User.js";

function App() {
  return (
    <div className="App">
      <div className="container-fluid group">
        <header className="header--container">
          <div className="text-center">
            Create Group
            <i className="float-right fa fa-times"></i>
          </div>
        </header>

        <div className="user--group m-5">
          <div className="group--container">
            <div className="row">
              <div className="col-sm-4 text-center">
                <img
                  src={"default-pic.jpg"}
                  alt="default-user-group-pic"
                  className="user--group--pic img-fluid"
                />
                <br></br>
                <span className="mt-2">
                  <i class="fa fa-camera mr-3"></i>Group Logo
                </span>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-12 p-3">
                    <span className="col-sm-3 i-block">Name</span>
                    <span className="group--info col-sm-4 i-block">
                      group name
                    </span>
                  </div>
                  <div className="col-sm-12 p-3">
                    <span className="col-sm-3 i-block">Description</span>
                    <span className="group--info col-sm-4 i-block">
                      group description
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="users-container mt-5 text-center">
              {/* User Component */}
              <UserList />
              <div className="btn__group">
                <button type="submit" className="btn btn-primary mr-3">
                  Update
                </button>
                <button type="button" className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
