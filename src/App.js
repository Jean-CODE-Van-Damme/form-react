import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [formOk, setFormOk] = useState(false);

  return (
    <div className="big-div">
      {formOk ? (
        <StepTwo
          setFormOk={setFormOk}
          title="Results"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          error={error}
          setError={setError}
        />
      ) : (
        <Form
          setFormOk={setFormOk}
          title="Create Account"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          error={error}
          setError={setError}
        />
      )}
      {/* <Form
        setFormOk={setFormOk}
        title="Create Account"
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        error={error}
        setError={setError}
      /> */}
      {/* <StepTwo
        title="Results"
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        error={error}
        setError={setError}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
