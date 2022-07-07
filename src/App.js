import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./Footer";

let str = "manue";
let newStr = "";
newStr = str.substring(0, 2);
console.log(newStr);

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <div>
      <Form />
      <StepTwo />
      <Footer />
    </div>
  );
}

export default App;
