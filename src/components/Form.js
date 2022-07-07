// import { useState } from "react";

const Form = ({
  title,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  errorMessage,
  setErrorMessage,
  error,
  setError,
  setFormOk,
}) => {
  const verifyPassword = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Please enter your name");
    }
    if (password !== passwordConfirm) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
      setError(true);
    } else {
      setErrorMessage("");
      setError(false);
      setFormOk(true);
    }
  };

  return (
    <>
      <h1>{title}</h1>
      {/* <div className="big_div"> */}
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
            // marche sans creer un state error
            //   className={errorMessage && "red"}
            className={error && "red"}
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
            className={error && "red"}
            // marche sans creer un state error
            //   className={errorMessage && "red"}
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
      {/* </div> */}
    </>
  );
};

export default Form;
