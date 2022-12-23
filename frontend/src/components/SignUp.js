import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/user/signup", {
        userName: name,
        password: password,
        email: email,
      });
      alert("User Registration Successful");
      setName("");
      setPassword("");
      setEmail("");
      navigate("/login");
    } catch {
      alert("User Registation Failed");
    }
  }

  return (
    <div className="container-fluid d-flex align-items-center flex-column">
      <div className="row">
        <Header title={"Sign Up"} />
      </div>
      <form>
        <div className="form-group row">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="form-group row">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="form-group row">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={handleSubmit} className="btn btn-primary mt-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
