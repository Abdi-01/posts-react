"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FaFile, FaImage } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { callAPI } from "@/config/axios";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/post";

const PostPage: React.FunctionComponent = () => {
  const router = useRouter();

  const [userList, setUserList] = React.useState<any[]>([]);
  const [postsList, setPostsList] = React.useState<Post[]>([]);
  const [post, setPost] = React.useState<string>("");
  const getUserList = async (): Promise<void> => {
    try {
      const res = await callAPI.get("/users");
      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostsList = async () => {
    try {
      const { data } = await callAPI.get("/posts");
      setPostsList(data.result);
      console.log("posts", data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserList();
    getPostsList();
  }, []);

  const printUserList = () => {
    return userList.map((val: any) => {
      return (
        <div
          key={val.id}
          className="flex bg-white rounded-lg py-2 mb-2 shadow-md cursor-pointer"
        >
          <img
            className="w-10 h-10 mx-3 rounded-full shadow-md"
            src={`https://robohash.org/${val.username}.png`}
            alt="icon"
          />
          <div>
            <h3 className="font-semibold">{val.name}</h3>
            <p className="text-xs font-extralight">{val.phone}</p>
          </div>
        </div>
      );
    });
  };

  const printPostsList = () => {
    return postsList.map((val: any, idx: number) => {
      console.log(val);

      return (
        <div
          key={idx}
          className="flex items-center bg-white rounded-s-full rounded-e-xl cursor-pointer"
          onClick={() => router.push(`/posts/${val.title}`)}
        >
          <img
            className="w-20 h-20 bg-slate-100 rounded-full shadow-md"
            src={`https://robohash.org/${val.userId}-${val.id}.png`}
            alt="icon"
          />
          <div className="px-8 rounded-e-xl">
            <h4 className="uppercase font-semibold">{val.user.username}</h4>
            <h6 className="text-xs font-thin">
              {new Date(val.createdAt).toLocaleString()}
            </h6>
            <h4>{val.title}</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div id="timeline" className="w-full ">
        <div className="relative md:flex w-full items-center">
          <img
            className="absolute z-50 right-1 top-1 md:relative w-12 md:w-20 h-12 md:h-20 md:mx-3 bg-slate-100 rounded-full shadow-md"
            src={`https://robohash.org/random.png`}
            alt="icon"
          />
          <div className="w-full bg-white md:p-3 rounded-lg shadow-md">
            <div className="relative w-full">
              <input
                placeholder="Title"
                className="w-full p-3 rounded-md focus:outline-none"
              />
              <textarea
                className="w-full p-3 rounded-md resize-none focus:outline-none"
                rows={2}
                onChange={(e: any) => setPost(e.target.value)}
                placeholder="Type your story"
              />
              <span className="absolute right-2 bottom-2 text-sm text-gray-400">
                {post.length}/350
              </span>
            </div>
            <hr className="md:mb-4" />
            <div className="flex p-2 justify-between items-center">
              <div className="flex gap-2">
                <div>
                  <FaImage size={24} color="#334156" />
                </div>
              </div>
              <Button
                type="button"
                className="bg-slate-700 text-white md:px-3 md:py-0.5 text-sm rounded-full shadow"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="space-y-3">{printPostsList()}</div>
      </div>
      <div id="user-list" className="none lg:block lg:w-1/4">
        <div className="sticky top-2">{printUserList()}</div>
      </div>
    </>
  );
};

export default PostPage;
