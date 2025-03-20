import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Forum from "../components/Forum";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import QuestionForm from "../components/QuestionForm";
import Tags from "../components/Tags";
import LatestThreads from "../components/LatestThreads";
import TopThreads from "../components/TopThreads";
import Logout from "../components/Logout";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile";
import MyQuestions from "../components/MyQuestions";
import EditQuestion from "../components/EditQuestion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LatestThreads /> },
      { path: "/top-threads", element: <TopThreads /> },
      { path: "/tags", element: <Tags /> },
      {
        path: "/sign-up",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          { path: "/me", element: <Profile /> },
          { path: "/me/questions", element: <MyQuestions /> },
          { path: "/me/question/:id", element: <EditQuestion /> },
          { path: "/questions/:id", element: <Forum /> },
          { path: "/new", element: <QuestionForm /> },
        ],
      },
    ],
  },
]);

export default router;
