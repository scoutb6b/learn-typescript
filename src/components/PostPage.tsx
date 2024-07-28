import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const dateFormat = (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  };
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPost(data.post);
    };
    getPost();
  }, []);
  if (post === null) {
    return <div>loading...</div>;
  }
  const { thumbnailUrl, createdAt, categories, title, content } = post;
  return (
    <div className="mx-auto w-3/4">
      <img className="mx-auto" src={thumbnailUrl} alt="" />
      <div className="p-4">
        <div className="flex justify-between mt-5">
          <div>{dateFormat(createdAt)}</div>
          <div className="flex gap-4">
            {categories.map((item) => (
              <p className="border border-blue-300 rounded-md px-2 py-1 text-blue-500">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="text-2xl font-semibold mt-5">{title}</div>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default PostPage;
