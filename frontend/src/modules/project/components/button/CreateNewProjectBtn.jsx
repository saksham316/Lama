import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./createNewProjectBtn.module.css";

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
        fontSize: "25px",
        width: "350px",
        borderRadius: "10px",
        fontFamily: "monospace",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosAddCircle size={50} />
      Create New Project
    </button>
  );
};

export { CreateNewProjectBtn };
