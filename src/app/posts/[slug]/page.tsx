// Server component
import axios from "axios";

interface IDetailProps {
  params: { slug: string };
}

const Detail: React.FunctionComponent<IDetailProps> = async ({ params }) => {
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

export default Detail;
