import { isEmail } from "validator";

export const authValidator = (name, value) => {
  let errorMessage = { email: "", password: "" };
  if (name === "email") {
    errorMessage.email = isEmail(value) ? "" : "Invalid Email";
  } else if (name === "password") {
    errorMessage.password =
      value.length < 5 ? "Password should be more than 4 characters" : "";
  }

  return errorMessage;
};
