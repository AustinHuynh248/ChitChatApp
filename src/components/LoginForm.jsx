import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // handle the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "1c022845-31e1-4e63-9464-ab09d2b53418",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chatengine -> give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      // error -> try with new username..
      setError("Incorrect username and password! Try again");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="AustinHuynh"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="1234"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
