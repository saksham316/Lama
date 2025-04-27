import { iconSize } from "../utils/constants";
import styles from "./styles/addNewFileModal.module.css";
import { RxCross2 } from "react-icons/rx";
import youtubeIcon from "/images/icons/youtube.jpg";
import { InputField } from "../../../shared/components/molecules/inputField/InputField";
import { Button } from "../../../shared/components/atoms/button/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  createProjectFile,
  getProjectFiles,
} from "../../../redux/project/projectAction";
import { useParams } from "react-router-dom";

const AddNewFileModal = ({ onClose }) => {
  // ---------------------------------------------------States--------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // authSchema
  const projectFileSchema = yup.object().shape({
    name: yup
      .string()
      .required("Project File Name is required")
      .min(6, "Password must be at least 6 characters"),
    description: yup
      .string()
      .required("Project File Transcript is required")
      .min(6, "Password must be at least 6 characters"),
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
    resolver: yupResolver(projectFileSchema),
    mode: "onChange",
  });
  // -----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions--------------------------------------------------------------

  const handleAddProjectFile = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await dispatch(
        createProjectFile({ payload: data, id: project_id })
      );
      if (res.payload.success) {
        dispatch(getProjectFiles(project_id));
        setIsLoading(false);
        onClose();
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
    <div className={styles.main_container}>
      <div className={styles.main_container__top}>
        <div>
          <img src={youtubeIcon} alt="youtube" />
          <p>Upload from Youtube</p>
        </div>
        <RxCross2
          size={iconSize}
          style={{ cursor: "pointer" }}
          onClick={onClose}
        />
      </div>
      <div className={styles.main_container__mid}>
        <div>
          <InputField
            w="full"
            label="Name"
            labelLocation="start"
            errorLocation="start"
            {...register("name")}
            errorMessage={errors.name?.message ?? ""}
          />
        </div>
        <div className={styles.mid_textarea}>
          <label htmlFor="transcript">Transcript</label>
          <textarea id="transcript" {...register("description")}></textarea>
          <span>
            {errors.description?.message ? errors.description?.message : ""}
          </span>
        </div>
      </div>
      <div className={styles.main_container__bottom}>
        <Button
          bgColor="black"
          title={isLoading ? "Uploading..." : "Upload"}
          color="white"
          w="100px"
          onClick={handleAddProjectFile}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default AddNewFileModal;
