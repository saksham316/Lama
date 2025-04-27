import React, { useState } from "react";
import styles from "./styles/addNewProjectModal.module.css";
import { InputField } from "../../../shared/components/molecules/inputField/InputField";
import { Button } from "../../../shared/components/atoms/button/Button";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createProject,
  getProjects,
} from "../../../redux/project/projectAction";

const AddNewProjectModal = ({ onCancel }) => {
  // ---------------------------------------------------States--------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // projectSchema
  const projectSchema = yup.object().shape({
    projectName: yup
      .string()
      .required("Project Name is required")
      .min(6, "Project Name must be at least 6 characters"),
  });

  // -----------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------Hooks--------------------------------------------------------------
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
    mode: "onChange",
  });
  // -----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions--------------------------------------------------------------

  const handleAddProject = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await dispatch(createProject({ payload: data }));
      if (res.payload.success) {
        dispatch(getProjects());
        setIsLoading(false);
        onCancel();
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
      <div className={styles.addModalTop}>Create Project</div>
      <div className={styles.addModalMid}>
        <p>Enter Project Name:</p>
        <InputField
          {...register("projectName")}
          placeholder="Type here"
          w="full"
          errorMessage={errors.projectName?.message ?? ""}
          errorLocation="start"
        />
      </div>
      <div className={styles.addModalBottom}>
        <Button
          title="Cancel"
          w="100px"
          h="50px"
          color="red"
          onClick={onCancel}
        />
        <Button
          title={isLoading ? "Saving..." : "Save"}
          w="100px"
          bgColor="#7E22CE"
          color="white"
          onClick={handleAddProject}
        />
      </div>
    </div>
  );
};

export default AddNewProjectModal;
