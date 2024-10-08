import React from "react";
import { checkOtpCode } from "../../services/auth";
import { setCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

interface Props {
  setCode: (code: string) => void;
  setStep: (step: number) => void;
  mobile: string;
  code: string;
}

const CheckOtpForm: React.FC<Props> = ({ mobile, code, setCode, setStep }) => {
  const navigate = useNavigate();
  const queryKey = ["profile"];
  const queryFn = () => getProfile();
  const { refetch } = useQuery({ queryKey, queryFn });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.length === 5) {
      const { res } = await checkOtpCode(mobile, code);
      setCookie(res?.data);
      navigate("/");
      refetch()
    }
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <h3>ورود به حساب کاربری</h3>
        <p>کد پیامک شده به این شماره {mobile}راوارد کنید</p>
        <input
          type="text"
          placeholder="کد تایید"
          value={code}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
        />
        <button type="submit">ورود</button>
        <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      </form>
    </>
  );
};

export default CheckOtpForm;
