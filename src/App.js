// while importing components use {} for inline otherwise use default in the exporting file.
import { useState } from "react";
import "./App.css";
import list from "./List";
import Display from "./Display";
import Button from "./Display";
import { Paragraph } from "./Paragraph";

const App = () => {
  const [user, setUser] = useState("Bikram");
  const [userArg, setUserArg] = useState(["j", "k", "L"]);

  // Contolled Method

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setUser(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUserArg([...userArg, user]);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="" className="user-form">
        <p> {user}</p>
        <input onChange={handleOnChange} type="text" />
        <button>Add User</button>
      </form>
      <div>
        <ul>
          {userArg.map((item, i) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
