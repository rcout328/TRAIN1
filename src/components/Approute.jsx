
import {
  createBrowserRouter,
  RouterProvider,
  
  Link,
} from "react-router-dom";
import Github from "./github";
import Followers from "./Followers";
import Profile from "./Profile";

const routes = [
  {
    path: "/",
    element: <Github />,
  },
  {
    path: "/follower/:loginkar",
    element: <Followers />,
  },
  {
    path: "/follower/profile/:pro",
    element: <Profile />,
  },
];

const router = createBrowserRouter(routes);

const Approute = () => {
  return (
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/">GitHub Profile</Link>
          </li>
        </ul>
      </nav>
    </RouterProvider>
  );
};

export default Approute;
