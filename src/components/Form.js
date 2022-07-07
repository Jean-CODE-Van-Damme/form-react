import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("false");

  const verifyPassword = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
      setError = "true";
    } else {
      setErrorMessage("");
      setError = "false";
    }
  };

  return (
    <>
      <h1>Create Account</h1>
      <div className="big_div">
        <form onSubmit={verifyPassword}>
          <div className="little_div">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Jean Dupont"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="little_div">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Jeandupont@lereacteur.io"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="little_div">
            <label htmlFor="password">Password</label>
            <input
              //   className={{ error } === true && "red"}
              className={{ error } === false ? "red" : "null"}
              type="password"
              id="password"
              placeholder="IErEaCTEuR2020"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="little_div">
            <label htmlFor="passwordConfirm">Confirm your password</label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="IErEaCTEuR2020"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>

          <div className="button">
            <button>Valider</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
