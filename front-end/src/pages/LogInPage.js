import { useState } from "react";
import { useHistory } from "react-router-dom";

const LogInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onLogInClicked = () => {
    alert("Login not implemented yet");
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        type="text"
        placeholder="someone@gmail.com"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <hr />
      <button
        type="button"
        onClick={onLogInClicked}
        disabled={!emailValue || !passwordValue}
      >
        Log In
      </button>
      <button type="button" onClick={() => history.push("/forgot-password")}>
        Forgot your password
      </button>
      <button type="button" onClick={() => history.push("/signup")}>
        Dont have an account? Sign Up
      </button>
    </div>
  );
};

export default LogInPage;
