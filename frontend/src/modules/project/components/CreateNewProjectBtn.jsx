import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./styles/createNewProjectBtn.module.css";

const CreateNewProjectBtn = ({ container2, onClick }) => {
  return (
    <button
      className={`${container2 ? styles.container2 : styles.container}`}
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        backgroundColor: "#211935",
        color: "white",
        justifyContent: "center",
        fontSize: "20px",
        borderRadius: "7px",
        cursor: "pointer",
        padding: ".5rem 1rem",
        outline: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <IoIosAddCircle size={30} />
      Create New Project
    </button>
  );
};

export { CreateNewProjectBtn };
