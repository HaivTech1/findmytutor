import React from 'react'

import Mainlayout from '@/components/Mainlayout'
import StudentSetup from '@/components/StudentSetup'
import TutorSetup from '@/components/TutorSetup'
import { useStateProvider } from '@/context/StateContext'
import { UseAuth } from '@/hooks/UseAuth'
import withAuth from '@/hooks/withAuth'

const Setup = () => {
    UseAuth({
        middleware: "auth",
        redirectIfAuthenticated: "/"
    });

    const [{userInfo}] = useStateProvider();

    const showStep = () => {
        switch (userInfo?.type) {
          case "student":
            return <StudentSetup user={userInfo} />;
          case "tutor":
            return <TutorSetup user={userInfo} />;
          default:
            break;
        }
    }

  return (
    <Mainlayout>
      <div className="h-full max-w-3xl mx-auto p-4 mt-2">
        <h1 className="text-xl font-extrabold tracking-wide leading-tight drop-shadow-lg">
          Welcome!
        </h1>

        <p className="text-xs leading-relaxed tracking-wider italic">
          Thank you for registering. Let's kickstart your {userInfo?.type}{" "}
          profile setup with ease.
        </p>

        <div>{showStep()}</div>
      </div>
    </Mainlayout>
  );
}

export default withAuth(Setup);
