import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/user/signup", {
        userName: name,
        password: password,
        email: email,
      });
      alert("User Registration Successful");
      setName('');
      setPassword('');
      setEmail('');
    } catch {
        alert("User Registation Failed");
    }
  }

  return (
    <div class="container-fluid d-flex justify-content-center">
      <form>
        <div class="form-group row">
          <label for="userName">User Name</label>
          <input
            type="text"
            class="form-control"
            id="userName"
            placeholder="User Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div class="form-group row">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div class="form-group row">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <button onClick={handleSubmit} class="btn btn-primary row mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
