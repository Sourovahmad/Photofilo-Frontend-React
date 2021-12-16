import { Routes, Route } from "react-router-dom";
import FreelancerHome from "../Auth/FreelancerHome/FreelancerHome";
import Home from "../Auth/Home/Home";
import Login from "../Auth/Login";
import Create from "../Auth/Profile/Create/Create";
import Profile from "../Auth/Profile/Profile";
import SingleProject from "../Auth/SingleProject/SingleProject";
import Notfound from "../Errors/Notfound";

const AllRoutes = ({ prfileData, loggedIn }) => {
  return (
    <div>
      <Routes>
        {/* public Compnents */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/freelancer-profile/:userId" element={<FreelancerHome></FreelancerHome>} />
        <Route path="/project/:projectId" element={<SingleProject></SingleProject>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<Notfound></Notfound>} />


        {/* Protected Routes */}
        <Route
          path="/profile"
          element={loggedIn ? <Profile prfileData={prfileData}></Profile> : <Login></Login>}
        />
        <Route path="/create" element={ loggedIn ?  <Create></Create>  : <Login></Login> } />

      </Routes>
    </div>
  );
};

export default AllRoutes;
