import React from "react";
import { Button } from "../../atoms/button/Button";
import { ActionButton } from "../../molecules/actionButton/ActionButton";
import styles from "./table.module.css";

const Table = ({
  title = "Your Files",
  columnDefs = [
    { label: "No." },
    { label: "Name", width: "30%" },
    { label: "Upload Date & Time" },
  ],
}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {columnDefs &&
              columnDefs.map((def) => {
                return (
                  <th style={{ width: def.width ? def.width : "auto" }}>
                    {def.label}
                  </th>
                );
              })}
            <th>{"Action"}</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody} style={{ overflow: "scroll" }}>
          <tr>
            <td>Hell</td>
            <td>Hell</td>
            <td>Hell</td>
            <td>
              <span>
                <ActionButton />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Table };
