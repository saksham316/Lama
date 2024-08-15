import React from "react";
import { Card } from "../../../../../shared/components/atoms/card/Card";
import { ADD_PODCAST_OPTIONS } from "../../../utils/constants";
import uploadFileCloud from "/images/icons/uploadFileCloud.jpg";
import styles from "./addPodcast.module.css";
import { Button } from "../../../../../shared/components/atoms/button/Button";
import { Table } from "../../../../../shared/components/organisms/table/Table";

const AddPodcast = ({ setOpenModal, files = [] }) => {
  return (
    <div
      style={{
        wdith: "100%",
        height: "100%",
        padding: "20px 50px 0px 50px",
        scrollbarWidth: 0,
      }}
    >
      <h3 className={`${styles.title}`}>Add Podcast</h3>
      <div>
        <div className={`${styles.podcastCards}`}>
          {ADD_PODCAST_OPTIONS.map((option) => {
            const { title, description, logo } = option;
            return (
              <Card
                title={title}
                description={description}
                logo={logo}
                logoLocation={"right"}
                logoSize={"60%"}
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            );
          })}
        </div>
        <div className={`${styles.uploadFile}`}>
          {files.length ? (
            <div className={`${styles.uploadCard}`}>
              <div className={`${styles.uploadLogo}`}>
                <img src={uploadFileCloud} />
              </div>
              <h3 className={`${styles.description}`}>
                {
                  "Select a file or drag and drop here (Podcast Media or Transcription Text)"
                }
              </h3>
              <p className={`${styles.description}`}>
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
              </p>
              <div className={`${styles.selectBtn}`}>
                <Button
                  title={"Select File"}
                  color={"#7e22cd"}
                  radius={"20px"}
                  w={"120px"}
                  borderColor={"#7e22cd"}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />
              </div>
            </div>
          ) : (
            <Table />
          )}
        </div>
      </div>
    </div>
  );
};

export { AddPodcast };
