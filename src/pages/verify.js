import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LoaderIcon } from 'react-hot-toast';

import { showErrorToast, showSuccessToast } from '@/components/CustomToast';
import Mainlayout from '@/components/Mainlayout'
import Client from '@/context/Client';
import { useStateProvider } from '@/context/StateContext';
import { sendError } from '@/hooks/helpers';
import redirectTo from '@/hooks/redirectTo';
import siteSettings from '@/hooks/siteSettings';
import { UseAuth } from '@/hooks/UseAuth';

const Verify = () => {

    UseAuth({
      middleware: "verify",
      redirectIfAuthenticated: "/",
    });

    const  [{userInfo}] = useStateProvider();

    const router = useRouter();
     const { redirect } = router.query;
    const [code, setCode] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingResend, setIsLoadingResend] = useState(false);

    const codeLength = Array(4).fill(0);

    const handleSubmit = async (pin) => {
      setIsLoading(true);
      try {
        Client()
          .post("/user/verify/email/code", {
            code: pin,
          })
          .then((response) => {
            setIsLoading(false)
            const { data } = response;
            showSuccessToast(data.message);
            router.push("/");
          })
          .catch((error) => {
            setIsLoading(false);
            const errorMessage = sendError(error);
            showErrorToast(
              errorMessage?.message ??
                "There was an error verifying your email. Please try again."
            );
          });
      } catch (error) {
        setIsLoading(false);
        const errorMessage = sendError(error);
        showErrorToast(errorMessage?.error);
      }
    }

    const handleChange = (value, index) => {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < codeLength.length - 1) {
        document.getElementById(`input-${index + 1}`).focus();
      }

       if (newCode.join("").length === 4) {
         handleSubmit(newCode.join(""));
       }
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace") {
        const newCode = [...code];
        newCode[index] = "";

        if (index > 0) {
          document.getElementById(`input-${index - 1}`).focus();
        }

        setCode(newCode);
      }
    };

    const handleResendCode = async () => {
      setIsLoadingResend(true);
      try {
        Client()
          .get("/user/resend/email/code")
          .then((response) => {
            const {data} = response;
            showSuccessToast(data.message);
          })
          .catch((error) => {
            const errorMessage = sendError(error);
            showErrorToast(errorMessage.message);
          });
      } catch (e) {
        showErrorToast(sendError(e).error);
      }finally {
        setIsLoadingResend(false);
      }
    };


  return (
    <Mainlayout>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center  p-6">
          <h1 className="font-bold text-center text-black">Verify Email</h1>
          <p className="text-xs text-center text-black mx-6 sm:mx-0 mt-2">
            Let get you verified! Enter the four digits OTP sent to your email{" "}
            {userInfo?.email}
          </p>

          <div className="p-4 flex-col items-center justify-center space-x-2">
            {codeLength.map((_, index) => (
              <input
                id={`input-${index}`}
                key={index}
                value={code[index] || ""}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                className="border border-primary w-[50px] h-[50px] rounded-lg text-black text-center"
              />
            ))}
          </div>

          {(isLoading ||
            isLoadingResend) && (
              <div className="text-xs flex flex-row items-center space-x-2 text-black">
                <LoaderIcon /> Initializing...
              </div>
            )}

          <div className="flex items-center justify-center space-x-2 mt-2">
            <p className="text-[12px] text-black">Didn't Receive any Code?</p>
            <button
              onClick={handleResendCode}
              className="text-[12px] font-bold text-primary"
            >
              <div className="flex items-center space-x-1 justify-center">
                <p>Resend</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Verify
