import "./App.css";
import Title from "./components/title";
import Text from "./components/text";
import TextArea from "./components/textarea";
import Button from "./components/button";
import { useState } from "react";
function App() {
  const [enableT, setEnableT] = useState(true);
  const [enableButton, setEnableButton] = useState("");
  const [showM, setShowM] = useState("");
  const [formDisplay, setFormDisplay] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setEnableT(false);
    setEnableButton(false);
    setShowM("loadingMessage");
    try {
      await submitForm(e.target.elements.textarea.value);
      setShowM("successMessage");
      setFormDisplay(false);
    } catch (err) {
      setShowM("errorMessage");
      setErrorMessage(err.message);
    } finally {
      setEnableT(true);
      setEnableButton(true);
    }
  }

  function handleTextareaChange(e) {
    const inputValue = e.target.value;
    if (inputValue.trim().length === 0) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }
  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() == "istanbul") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 1500);
    });
  }
  return (
    <>
      {formDisplay && (
        <form id="form" onSubmit={handleFormSubmit}>
          <Title title={"City Quiz"} />
          <Text value={"What city is located on two continents?"} />
          <TextArea onChange={handleTextareaChange} enable={enableT} />
          <br />
          <Button enable={enableButton} />
          {showM === "loadingMessage" && <Text value="Loading..." />}
          {showM === "errorMessage" && (
            <Text color="red" value={errorMessage} />
          )}
        </form>
      )}
      {showM === "successMessage" && <Title title={"That's right!"} />}
    </>
  );
}

export default App;
