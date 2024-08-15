import DefaultLayout from "../components/layout/defaultLayout/DefaultLayout";
import { ManageProjects } from "../modules/project/pages/manage-projects/ManageProjects";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AuthForm from "../components/forms/auth/AuthForm";
import { ProjectDetails } from "../modules/project/pages/manage-projects/ProjectDetails";

export const routes = () => {
  // ---------------------------------------------------------Hooks-----------------------------------------------------------
  const { userEmail } = useAuth();
  // ----------------------------------------------------------------------------------------------------------------------
  const routes = [
    {
      path: "/",
      element: userEmail ? (
        <Navigate to="/manage-projects" />
      ) : (
        <DefaultLayout />
      ),
      children: [{ path: "/", element: <AuthForm /> }],
    },
    {
      path: "/manage-projects",
      element: <ManageProjects />,
      children: [
        {
          path: ":project_id",
          element: <ProjectDetails />,
        },
      ],
    },
  ];
  return routes;
};
