import * as React from "react";
import Detail from "./page";
import PostPage from "./page";

interface ILayoutProps {
  children: React.ReactNode;
}

const PostSlugLayout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="container container-lg m-auto">
      {children}
    </div>
  );
};

export default PostSlugLayout;
