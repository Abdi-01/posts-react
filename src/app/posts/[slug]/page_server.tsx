// Server component
import axios from "axios";

interface IPostDetailProps {
  params: { slug: string };
}

const PostDetail: React.FunctionComponent<IPostDetailProps> = async ({
  params,
}) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?id=${params.slug}`
  );
  console.log(res.data);

  return (
    <div>
      <p className="text-3xl">Posts Title Server : {res.data[0].title} </p>
    </div>
  );
};

export default PostDetail;
