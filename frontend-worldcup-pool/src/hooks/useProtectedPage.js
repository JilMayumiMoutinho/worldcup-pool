import { useEffect } from "react";
import { useNavigate } from "react-router";
import { goToLogin } from "../routes/Coordinators";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "" || token === undefined) {
      goToLogin(navigate);
    }
  }, [navigate]);
};
