"use client";
import { IRootState } from "@/redux/store";
import { Spin, Steps } from "antd";
import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import Loading1 from "../../component/Loading";
const FormOtp = React.lazy(() => import("./formOtp/FormOtp"));
const Login = React.lazy(() => import("./login/Login"));
const Register = React.lazy(() => import("./register/Register"));
const ForgotPass = React.lazy(() => import("./forgotPass/ForgotPassword"));
const NewPassword = React.lazy(() => import("./newPassword/NewPassword"));

function Log() {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  const key = useSelector((state: IRootState) => state.nav.key);
  const steps = useSelector((state: IRootState) => state.nav.steps);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 main-log"
      style={{
        backgroundImage: `url("/img/background.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {(key === "register" ||
        key === "sendOtp" ||
        key === "forgotpass" ||
        key === "newpassword") && (
        <div style={{ width: "600px" }}>
          <Steps
            current={steps}
            items={[
              {
                title: "Send OTP",
              },
              {
                title: "Verify OTP",
              },
              {
                title: "Sucessfull",
              },
            ]}
          />
        </div>
      )}
      <div className="container-login">
        {!isLoading ? (
          <Suspense
            fallback={<Spin size="large" delay={500} className=" text-white" />}
          >
            {key === "sendOtp" && <FormOtp setIsLoading={setIsLoading} />}
            {key === "signin" && <Login setIsLoading={setIsLoading} />}
            {key === "register" && <Register setIsLoading={setIsLoading} />}
            {key === "forgotpass" && <ForgotPass setIsLoading={setIsLoading} />}
            {key === "newpassword" && (
              <NewPassword setIsLoading={setIsLoading} />
            )}
          </Suspense>
        ) : (
          <Loading1 />
        )}
      </div>
    </main>
  );
}

export default Log;
