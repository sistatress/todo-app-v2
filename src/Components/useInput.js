import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  /* handle user input */
  const handleInput = (value) => {
    const newInput = value;
    setInput(newInput);
  };

  const clearInput = () => {
    setInput('')
  }

  return { input, setInput, clearInput, handleInput };
};

export default useInput;
