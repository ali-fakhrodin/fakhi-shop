import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading]
  );

  if (isLoading)
    return (
      <p className="text-red-900 text-3xl flex items-center justify-center text-center h-[100vh]">
        ...Loading
      </p>
    );

  return children;
}

export default ProtectedRoute;
