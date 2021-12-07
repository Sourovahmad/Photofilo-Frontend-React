import { Routes, Route } from "react-router-dom";
import Test from "../../Test/Test";
import Home from "../Auth/Home/Home";
import Login from "../Auth/Login";
import Create from "../Auth/Profile/Create/Create";
import Profile from "../Auth/Profile/Profile";
import Notfound from "../Errors/Notfound";

const AllRoutes = ({ prfileData, loggedIn }) => {
  return (
    <div>
      <Routes>
        {/* public Compnents */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<Notfound></Notfound>} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={loggedIn ? <Profile prfileData={prfileData}></Profile> : <Login></Login>}
        />

        <Route path="/create" element={<Create></Create>} />
        <Route path="/test" element={<Test></Test>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
