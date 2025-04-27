// ----------------------------------------------------Imports---------------------------------------------------------
import React, { useState } from "react";
import { InputField } from "../../../shared/components/molecules/inputField/InputField";
import styles from "./authForm.module.css";
import { useDispatch } from "react-redux";
import { CheckboxField } from "../../../shared/components/molecules/checkboxField/CheckboxField";
import { Button } from "../../../shared/components/atoms/button/Button";
import { FcGoogle } from "react-icons/fc";
import { iconSize } from "../../../utils/constants";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../redux/auth/authAction";

// ----------------------------------------------------------------------------------------------------------------------

const AuthModal = () => {
  // ---------------------------------------------------States--------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // authSchema
  const authSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // -----------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------Hooks--------------------------------------------------------------
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
    mode: "onChange",
  });
  // -----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions--------------------------------------------------------------

  const handleLogin = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await dispatch(login({ payload: data }));
      if (res.payload.success) {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  });
  // -----------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className={`${styles.container}`}>
        <section className={`${styles.leftSection}`} />
        <section className={`${styles.rightSection}`}>
          <div className={`${styles.logo}`}>
            <img src="./images/logo/authFormLogo.png" />
          </div>
          <form className={styles.authCard} onSubmit={handleLogin}>
            <div className={styles.inputWrapper}>
              <InputField
                {...register("email")}
                w={"full"}
                placeholder="Email Address"
                type="text"
                name="email"
                errorMessage={errors.email?.message ?? ""}
                errorLocation={"start"}
              />
              <InputField
                {...register("password")}
                w={"full"}
                placeholder="Password"
                type="password"
                name="password"
                errorMessage={errors.password?.message ?? ""}
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
                <span style={{ cursor: "pointer", color: "#085FCE" }}>
                  Forgot Password?
                </span>
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={`${styles.loginBtn}`}>
                <Button
                  title={isLoading ? "Logging in..." : "Login"}
                  bgColor={"#7e22ce"}
                  color={"white"}
                  w={"100%"}
                  type={"submit"}
                  disabled={isLoading}
                />
              </div>
              <div
                className="or"
                style={{
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
              <div>
                <div
                  className="googleAuth"
                  style={{
                    margin: "5px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "1.28px solid #DBDBDB",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FcGoogle size={iconSize} />
                  <p>Continue with Google</p>
                </div>
                <p className={styles.noAccount}>
                  Don't have an account? <span>Create Account</span>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AuthModal;
