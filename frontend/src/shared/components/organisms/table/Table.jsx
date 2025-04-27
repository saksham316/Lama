import React from "react";
import styles from "./table.module.css";

const Table = ({
  title = "Your Files",
  columnHeadDefs = [],
  columnBodyData = [],
  onView,
}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {columnHeadDefs &&
              columnHeadDefs.map((def, idx) => {
                return <th key={idx}>{def.label}</th>;
              })}
            <th>{"Action"}</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody} style={{ overflow: "auto" }}>
          {columnBodyData &&
            columnBodyData.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{data.name ?? ""}</td>
                  <td>
                    {data.createdAt
                      ? `${data.createdAt.split("T")[0]} | ${
                          data.createdAt.split("T")[1].split(".")[0]
                        }`
                      : ""}
                  </td>
                  <td>
                    <div className={styles.action_btn_wrapper}>
                      <button
                        onClick={() => {
                          onView(data);
                        }}
                      >
                        View
                      </button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
