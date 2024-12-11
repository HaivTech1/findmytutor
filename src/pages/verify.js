import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Mainlayout from '@/components/Mainlayout'
import { useStateProvider } from '@/context/StateContext';
import siteSettings from '@/hooks/siteSettings';
import { UseAuth } from '@/hooks/UseAuth';

const Verify = () => {

    UseAuth({
        middleware: "auth",
        redirectIfAuthenticated: "/",
    });

    const  [{userInfo}] = useStateProvider();

    const router = useRouter();
    const [code, setCode] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingResend, setIsLoadingResend] = useState(false);

    const codeLength = Array(4).fill(0);

  return (
    <Mainlayout>
      <div className="first-letter:flex justify-center items-center">
        <div className="w-[95%] lg:w-[80%] mx-auto my-10 flex-col justify-center items-center">
          <div className="flex justify-center items-center mt-10">
            <Link href="/">
              <Image
                src={siteSettings.siteLogoWhite}
                alt={siteSettings.title}
                width={50}
                height={50}
              />
            </Link>
          </div>

          <h1 className="font-nunito-bold text-center">Verify Email</h1>
          <p className="text-xs text-center">
            Enter the four digits OTP sent to your email {userInfo?.email}
          </p>

          <div className="bg-white p-8  min-w-5xl flex-col items-center justify-center space-x-4">
            {codeLength.map((_, index) => (
              <input
                key={index}
                className="border border-primary w-14 h-14 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Verify
