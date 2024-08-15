// ----------------------------------------------------Imports---------------------------------------------------------
import React from "react";
import { useState } from "react";
import { InputField } from "../../../shared/components/molecules/inputField/InputField";
import styles from "./authForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/slices/authSlice";
import { CheckboxField } from "../../../shared/components/molecules/checkboxField/CheckboxField";
import { Button } from "../../../shared/components/atoms/button/Button";
import { FcGoogle } from "react-icons/fc";
import { iconSize } from "../../../utils/constants";
import { authValidator } from "../../../helpers/validator";

// ----------------------------------------------------------------------------------------------------------------------

const AuthModal = () => {
  // ---------------------------------------------------States--------------------------------------------------------------
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // -----------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------Hooks--------------------------------------------------------------
  const dispatch = useDispatch();
  // -----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions--------------------------------------------------------------

  const handleInputErrors = (name, value) => {
    setErrorMessage(authValidator(name, value));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!errorMessage.email && !errorMessage.password) {
      dispatch(login(email));
    }
  };
  // -----------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className={`${styles.container}`}>
        <section className={`${styles.leftSection}`} />
        <section className={`${styles.rightSection}`}>
          <div className={`${styles.logo}`}>
            <img src="./images/logo/authFormLogo.png" />
          </div>
          <form className={`${styles.authCard}`} onSubmit={handleLogin}>
            <div className="" style={{ width: "70%" }}>
              <InputField
                w={"full"}
                placeholder="Email Address"
                type="text"
                name="email"
                onChange={(e) => {
                  const { value } = e.target;
                  handleInputErrors("email", value);
                  setEmail(value);
                }}
                errorMessage={errorMessage.email}
                errorLocation={"start"}
              />
            </div>
            <div className="" style={{ width: "70%" }}>
              <InputField
                w={"full"}
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => {
                  const { value } = e.target;
                  handleInputErrors("password", value);
                  setPassword(value);
                }}
                errorMessage={errorMessage.password}
                errorLocation={"start"}
              />
            </div>
            <div className={`${styles.forgotPasswordCard}`}>
              <div style={{ width: "50%", paddingLeft: "10px" }}>
                <CheckboxField title={"Remember Me"} />
              </div>
              <p
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "1vw",
                  paddingRight: "10px",
                  alignItems: "center",
                }}
              >
                <span style={{ cursor: "pointer" }}>Forgot Password?</span>
              </p>
            </div>
            <div
              className={`${styles.loginBtn}`}
              style={{ width: "70%", padding: "10px" }}
            >
              <Button
                title={"Login"}
                bgColor={"#7e22ce"}
                color={"white"}
                w={"100%"}
              />
            </div>
            <div
              className="or"
              style={{
                width: "70%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "centers",
              }}
            >
              <div
                style={{ width: "45%", borderColor: "gray", opacity: "60%" }}
              >
                <hr />
              </div>
              <p
                style={{
                  width: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                or
              </p>
              <div
                style={{ width: "45%", borderColor: "gray", opacity: "60%" }}
              >
                <hr />
              </div>
            </div>
            <div
              className="googleAuth"
              style={{
                width: "65%",
                margin: "5px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                boxShadow: "1px 1px 5px 0px gray",
                gap: "10px",
              }}
            >
              <FcGoogle size={iconSize} />
              <p>Continue with Google</p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AuthModal;
