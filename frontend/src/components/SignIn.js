import React ,{ useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
        await axios.post("http://localhost:8080/api/v1/user/login", {
          userName: name,
          password: password
        })
        .then(response => response.data === 1? navigate("/home"):alert("User Login Failed"));
        setName("");
        setPassword("");
  
      } catch {
        alert("User Login Failed");
      }
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
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
          <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
