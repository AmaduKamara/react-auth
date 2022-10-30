import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onSignUpClicked = () => {
    alert("Signup not implemented yet");
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
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
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      <hr />
      <button
        type="button"
        onClick={onSignUpClicked}
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
      >
        Sign Up
      </button>
      <button type="button" onClick={() => history.push("/login")}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default SignUpPage;
