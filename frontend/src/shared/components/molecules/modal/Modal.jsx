import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../atoms/button/Button";
import { InputField } from "../inputField/InputField";
import styles from "./modal.module.css";

const Modal = ({
  title,
  inputFields,
  buttonFields,
  btnBgColor,
  btnColor,
  iconBeforeTitle,
  onClickOutside,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);
  return (
    <div
      className={`${styles.container}`}
      onClick={() => {
        modalOpen && onClickOutside();
      }}
    >
      <form
        className="modal"
        style={{
          borderRadius: "20px",
          width: "50vw",
          height: "300px",
          background: "white",
          boxShadow: "2px 2px 4px 2px gray",
          padding: "10px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {iconBeforeTitle ? (
          <div
            style={{
              width: "100%",
              position: "relative",
              height: "80px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <img
                className="icon"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                src={iconBeforeTitle}
              />
              <h4
                style={{
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                }}
              >
                {title}
              </h4>
            </div>
          </div>
        ) : (
          <h4
            style={{
              fontSize: "25px",
              fontFamily: "sans-serif",
            }}
          >
            {title}
          </h4>
        )}
        {inputFields &&
          inputFields.map((field) => {
            const { name, label } = field;
            return (
              <InputField
                name={name}
                label={label}
                w={"full"}
                errorLocation={"start"}
                labelLocation={"start"}
              />
            );
          })}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "20px",
            padding: "10px",
          }}
        >
          {buttonFields &&
            buttonFields.map((field) => {
              const { label } = field;
              return (
                <Button
                  title={label}
                  {...field}
                  color={btnColor}
                  bgColor={btnBgColor}
                />
              );
            })}
        </div>
      </form>
    </div>
  );
};

export { Modal };
