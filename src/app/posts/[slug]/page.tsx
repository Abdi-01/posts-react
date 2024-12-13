"use client";
import * as React from "react";
import { callAPI } from "@/config/axios";

interface IDetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<IDetailProps> = ({ params }) => {
  const [detailPost, setDetailPost] = React.useState<any>(null);
  const getDetailPosts = async (): Promise<void> => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/posts/${slug}`);
      setDetailPost(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPosts();
  }, []);

  return (
    <div className="w-3/4 m-auto space-y-4">
      <div className="w-full p-8 bg-white shadow-md rounded-lg cursor-pointer">
        <div className="flex items-center gap-4 mb-4">
          <img
            className="w-16 h-16 bg-slate-100 rounded-full shadow-md"
            src={`https://robohash.org/${detailPost?.userId}-${detailPost?.id}.png`}
            alt="icon"
          />
          <div>
            <p className="font-bold">{detailPost?.user.username}</p>
            <p className="text-xs font-thin">
              {new Date(detailPost?.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="px-8 rounded-e-md">
          <h4 className="uppercase font-semibold">{detailPost?.title}</h4>
          <p className="font-thin italic"> {detailPost?.body}</p>
        </div>
      </div>
      <div className="w-full p-8 space-y-4 bg-white shadow-md rounded-lg cursor-pointer">
        <h2 className="px-4 text-lg font-semibold">Comments</h2>
        <div id="comment-1" className="p-4 border-b-2">
          <div className="flex items-center gap-4 mb-4">
            <img
              className="w-8 h-8 bg-slate-100 rounded-full shadow-md"
              src={`https://robohash.org/${Math.random()}.png`}
              alt="icon"
            />
            <div>
              <p className="font-bold">
                {detailPost?.user.username + Math.random()}
              </p>
              <p className="text-xs font-thin">
                {new Date(detailPost?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
