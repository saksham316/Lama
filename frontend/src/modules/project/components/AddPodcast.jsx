import React, { useState } from "react";
import uploadFileCloud from "/images/icons/uploadFileCloud.jpg";
import styles from "./styles/addPodcast.module.css";
import { Button } from "../../../shared/components/atoms/button/Button";
import { Table } from "../../../shared/components/organisms/table/Table";
import { ADD_PODCAST_OPTIONS } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
  getProjectFiles,
  updateProjectFile,
} from "../../../redux/project/projectAction";
import { useParams } from "react-router-dom";

const AddPodcast = ({ setOpenModal, files = [] }) => {
  // ---------------------------------------------------States--------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  const [isView, setIsView] = useState(false);
  const [viewData, setViewData] = useState("");
  // projectFileUpdateSchema
  const projectFileUpdateSchema = yup.object().shape({
    description: yup
      .string()
      .required("Project File Description is required")
      .min(6, "Project File Description must be at least 6 characters"),
  });

  // -----------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------Hooks--------------------------------------------------------------
  const dispatch = useDispatch();
  const { project_id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectFileUpdateSchema),
    mode: "onChange",
    defaultValues: {
      description: viewData.description,
    },
  });
  // -----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions--------------------------------------------------------------

  const handleProjectFileUpdate = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await dispatch(
        updateProjectFile({ payload: data, id: viewData._id })
      );
      if (res.payload.success) {
        dispatch(getProjectFiles(project_id));
        setIsView(false);
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
    <div
      style={{
        wdith: "100%",
        height: "100%",
        padding: "20px 50px 0px 50px",
        scrollbarWidth: 0,
      }}
    >
      {isView ? (
        <div className={styles.edit_trans_header}>
          <h3 className={`${styles.edit_trans}`}>
            <FaArrowLeft
              onClick={() => {
                setIsView(false);
              }}
            />
            Edit Transcript
          </h3>
          <div className={styles.action_buttons}>
            <Button
              title={"Discard"}
              color="red"
              bgColor="white"
              border="1px solid"
              borderColor="red"
              w="100px"
              disabled={isLoading}
              onClick={() => {
                setIsView(false);
              }}
            />
            <Button
              title={isLoading ? "Saving..." : "Save"}
              color="white"
              bgColor="black"
              w="100px"
              onClick={handleProjectFileUpdate}
              disabled={isLoading}
            />
          </div>
        </div>
      ) : (
        <h3 className={`${styles.title}`}>Add Podcast</h3>
      )}
      {isView ? (
        <div className={styles.edit_trans_container}>
          <textarea
            {...register("description")}
            defaultValue={viewData.description}
            disabled={isLoading}
          ></textarea>
          <span>
            {errors.description?.message && errors.description.message}
          </span>
        </div>
      ) : (
        <div>
          <div className={`${styles.podcastCards}`}>
            {ADD_PODCAST_OPTIONS.map((option, idx) => {
              const { title, description, logo } = option;
              return (
                <div
                  className={styles.card_container}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  key={idx}
                >
                  <div className={styles.card_container__left}>
                    <p>{title}</p>
                    <p>{description}</p>
                  </div>
                  <div className={styles.card_container__right}>
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${styles.uploadFile}`}>
            {!files.length ? (
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
                    border="1px solid "
                  />
                </div>
              </div>
            ) : (
              <Table
                columnHeadDefs={[
                  { label: "No." },
                  { label: "Name" },
                  { label: "Upload Date & Time" },
                ]}
                columnBodyData={files ?? []}
                onView={(data) => {
                  setViewData(data);
                  setIsView(true);
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { AddPodcast };
