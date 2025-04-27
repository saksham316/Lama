import { useSelector } from "react-redux";

const useAuth = () => {
  const email = useSelector((state) => state.auth.user.email ?? "");

  return { email };
};
export { useAuth };
