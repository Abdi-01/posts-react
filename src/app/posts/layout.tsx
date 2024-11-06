import AuthGuard from "@/guard/AuthGuard";
import * as React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const PostsLayout: React.FunctionComponent<ILayoutProps> = async ({ children }) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="container container-lg m-auto">
      <AuthGuard>
        {children}
      </AuthGuard>
    </div>
  );
};

export default PostsLayout;
