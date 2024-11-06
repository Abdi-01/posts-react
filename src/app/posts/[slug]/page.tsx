// Server component
import axios from "axios";

interface IDetailProps {
  params: { slug: string };
}

const Detail: React.FunctionComponent<IDetailProps> = async ({ params }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?id=${params.slug}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <p className="text-3xl">Posts Title Server : {res.data[0].title} </p>
    </div>
  );
};

export default Detail;
