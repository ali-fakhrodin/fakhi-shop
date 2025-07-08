import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [navigate, isAuthenticated, isLoading]
  );

  if (isLoading) return <p className="text-red-900 text-3xl">Loading</p>;

    console.log(isAuthenticated);
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
