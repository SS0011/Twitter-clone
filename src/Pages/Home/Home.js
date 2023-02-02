import LeftSection from "../../Section/LeftSection/LeftSection";
import MidSection from "../../Section/MiddleSection/MidSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../RecoilState/LoginState/LoginState";
import style from "./Home.module.css";

export default function Home() {
  const [islogin, setIsLogin] = useRecoilState(LoginState);
  const navigate = useNavigate();
  useEffect(() => {
    if (islogin === false) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {islogin && 
        <div className={style.main}>
          <LeftSection />
          <MidSection />
          <RightSection />
        </div>
      }
    </>
  );
}
