import Footer from "../Footer";

const StepTwo = ({
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
  return (
    <>
      <h1>{title}</h1>

      <div className="steptwo">
        <div className="results">
          <p> Name : {name}</p>
          <p> Email : {email}</p>
          <p> Password : {password}</p>
        </div>
        <div className="button2">
          <button
            onClick={() => {
              setFormOk(false);
            }}
          >
            Edit Your Information
          </button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
