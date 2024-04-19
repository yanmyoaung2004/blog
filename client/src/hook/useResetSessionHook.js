import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useResetSession() {
  const location = useLocation();
  const [access, setAccess] = useState(null);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    const checkToken = async () => {
      try {
        const res = await fetch(`/api/user/resetsession/${token}`, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setAccess(true);
            setUserId(data.userId);
          } else {
            setError(data.error);
          }
        } else {
          console.error("HTTP error:", res.status);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    checkToken();
  }, [location.search]);

  return { access, userId, error };
}
