import React from "react";
import { sendOtp } from "../../services/auth";

interface Props {
  setStep: (step: number) => void;
  mobile: string;
  setMobile: (mobile: string) => void;
}

const SendOtp_form: React.FC<Props> = ({ setStep, mobile, setMobile }) => {
  const mobileRegex = /^09\d{9}$/;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mobileRegex) {
      const { res, error } = await sendOtp(mobile);
      if (res) setStep(2)
      if(error) console.log(error.message)
    }
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <h3>شماره موبایل خود را وارد کنید</h3>
        <span>
          برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره
          پیامک خواهد شد.
        </span>
        <input
          type="text"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </>
  );
};

export default SendOtp_form;
