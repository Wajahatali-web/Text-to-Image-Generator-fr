import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setuser] = useState(null);
  const [showLogin, setshowLogin] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [credit, setcredit] = useState(0);

  const navigate = useNavigate();

  // ✅ Backend URL from .env
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditsData = async () => {
    if (!token) return;
    try {
      const response = await fetch(`${backendUrl}/api/user/credits`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch credits");
      }

      if (data.success) {
        setcredit(data.credits);
        setuser(data.user);
      } else {
        toast.error(data.message || "Failed to load credits");
      }
    } catch (error) {
      console.error("Credits Fetch Error:", error);
      toast.error(error.message || "Network error");
    }
  };

 const generateImage = async (prompt) => {
  try {
    const response = await fetch(`${backendUrl}/api/image/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (data.success) {
      loadCreditsData();
      return data.resultImage;
    } else {
      toast.error(data.message || "Image generation failed"); // ✅ fixed here
      loadCreditsData();
      if (data.creditBalance === 0) {
        navigate("/buy");
      }
    }
  } catch (error) {
    toast.error(error.message);
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    setuser(null);
    setcredit(0);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token, backendUrl]);

  const value = {
    user,
    setuser,
    showLogin,
    setshowLogin,
    backendUrl,
    token,
    settoken,
    credit,
    setcredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

