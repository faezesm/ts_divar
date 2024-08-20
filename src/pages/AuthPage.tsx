import React, { useState } from "react";

import SendOtp_form from "../components/templates/SendOtp_form";
import CheckOtpForm from "../components/templates/CheckOtpForm";

const AuthPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 ? (
        <SendOtp_form setStep={setStep} mobile={mobile} setMobile={setMobile} />
      ) : (
          <CheckOtpForm mobile={mobile} code={code} setCode={setCode} setStep={setStep} />
      )}
    </div>
  );
};

export default AuthPage;
