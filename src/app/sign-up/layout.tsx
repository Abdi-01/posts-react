import * as React from "react";
import { Metadata } from "next";
import AuthGuard from "@/guard/AuthGuard";

interface ISignUpLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Join to share your story",
};

const SignUpLayout: React.FunctionComponent<ISignUpLayout> = ({ children }) => {
  return (
    <div>
      <AuthGuard page="sign-up">{children}</AuthGuard>
    </div>
  );
};

export default SignUpLayout;
