import * as React from "react";
import { Metadata } from "next";
import AuthGuard from "@/guard/AuthGuard";

interface ISignInLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sign In",
  description: "Join to share your story",
};

const SignInLayout: React.FunctionComponent<ISignInLayout> = ({ children }) => {
  return (
    <div>
      <AuthGuard page="sign-in">{children}</AuthGuard>
    </div>
  );
};

export default SignInLayout;
