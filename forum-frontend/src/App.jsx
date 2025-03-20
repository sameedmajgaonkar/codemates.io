import React, { useEffect, useState } from "react";
import auth from "./services/authService";
import NavBar from "./components/common/NavBar";
import { Outlet } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./context/UserContext";
import "./App.css";
/*    LAYOUT
      NAVBAR
    THREAD LIST  */
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const user = auth.getCurrentUser();
      setUser(user);
    } catch (ex) {}
  }, []);

  return (
    <UserContext.Provider value={user}>
      <NavBar />
      <div className="main">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          pauseOnHover={false}
          transition={Flip}
          theme="dark"
        />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default App;
