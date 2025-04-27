import DefaultLayout from "../components/layout/DefaultLayout";
import { ManageProjects } from "../modules/project/pages/ManageProjects";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AuthForm from "../components/forms/auth/AuthForm";
import { ProjectDetails } from "../modules/project/pages/ProjectDetails";
import ProtectedLayout from "../components/layout/ProtectedLayout";

export const routes = () => {
  // ---------------------------------------------------------Hooks-----------------------------------------------------------
  const { email } = useAuth();
  // ----------------------------------------------------------------------------------------------------------------------
  const routes = [
    {
      path: "/",
      element: email ? <Navigate to="/manage-projects" /> : <DefaultLayout />,
      children: [{ path: "/", element: <AuthForm /> }],
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "/manage-projects",
          element: <ManageProjects />,
          children: [
            {
              path: "/manage-projects/:project_id",
              element: <ProjectDetails />,
            },
          ],
        },
      ],
    },
  ];
  return routes;
};
