"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface IDetailProps {}

const Detail: React.FunctionComponent<IDetailProps> = (props) => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("id"));
  const [detailPost, setDetailPost] = React.useState<any>(null);

  const getDetailPosts = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${searchParams.get(
          "id"
        )}`
      );

      setDetailPost(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPosts();
  }, []);
  return (
    <div>
      <h1 className="text-3xl">Detail Page</h1>
      <h1 className="text-3xl">{detailPost?.title}</h1>
    </div>
  );
};

export default Detail;
