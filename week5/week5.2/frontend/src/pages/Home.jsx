import {
  Link,
  useNavigate,
  BrowserRouter,
  Router,
  Route,
} from "react-router-dom";
import { UserSignin } from "./UserSignin";
import { AdminSignin } from "./AdminSignin";
export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-white-900 font-bold">Home</h1>
      <div>
        <h2>welcome bokachoda</h2>
        <h6>Login as :</h6>
        <button onClick={() => navigate("/usersignin")}>User</button>
        <button onClick={() => navigate("/adminsignin")}>Admin</button>
      </div>
      <Router>
        <Route path="/usersignin" element={<UserSignin />}></Route>
        <Route path="/adminsignin" element={<AdminSignin />}></Route>
      </Router>
    </div>
  );
}
