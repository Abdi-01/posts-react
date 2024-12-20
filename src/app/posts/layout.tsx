import * as React from "react";
import { Metadata } from "next";
import AuthGuard from "@/guard/AuthGuard";

interface IPostLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Post List | View Other Story",
  description: "Join to share your story",
};

const PostLayout: React.FunctionComponent<IPostLayout> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="w-full m-auto md:flex md:gap-8 px-4 md:px-24 py-7 md:py-14 bg-slate-100 min-h-screen">
      <AuthGuard>{children}</AuthGuard>;
    </div>
  );
};

export default PostLayout;
