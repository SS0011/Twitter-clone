import { Routes, Route } from "react-router-dom";
import LogIn from "../Component/Log-In/LogIn";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import OtherProfilePage from "../Pages/OtherProfilePage/OtherProfilePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import MystatusPage from "../Pages/ThreadPage or Status Page/MyStatusPage";
import ThreadPage from "../Pages/ThreadPage or Status Page/ThreadPage";
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/otherprofile" element={<OtherProfilePage />} />
      
       <Route path="/status" element={<ThreadPage />} />
       <Route path="/mystatus" element={<MystatusPage />} />
      
    </Routes>
  );
}
