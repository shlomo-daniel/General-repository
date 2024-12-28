import { useState } from "react";

function useForm() {
  const [userObj, setUserObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInput = (ev) => {
    setUserObj(
      (userObj) => (userObj = { ...userObj, [ev.target.name]: ev.target.value })
    );
  };

  return { handleInput, userObj };
}

export default useForm;
