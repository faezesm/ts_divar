import api from "../configs/api";


const sendOtp = async (mobile: string) => {
  try {
    const res = await api.post("auth/send-otp", { mobile });
    return { res };
  } catch (error) {
    return { error };
  }
};

const checkOtpCode = async (mobile: string, code: string) => {
  try {
    const res = await api.post("/auth/check-otp", { mobile, code });
    return { res };
  } catch (error) {
    return { error };
  }
};

export { sendOtp , checkOtpCode};
