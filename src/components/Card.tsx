import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Card = () => {
  const dateFormat = (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
    };

    getAllPosts();
  }, []);

  return (
    <div className="mt-8">
      {posts.map((item) => {
        return (
          <Link
            to={`/posts/${item.id}`}
            key={item.id}
            className="w-3/4 mx-auto border border-gray-300 p-4 mb-6 rounded-lg block"
          >
            <div className="flex justify-between">
              <p>{dateFormat(item.createdAt)}</p>
              <div className="flex gap-2">
                {item.categories.map((category) => (
                  <p className="border border-blue-300 rounded-md px-2 py-1 text-blue-500 ">
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-bold my-4">{item.title}</h2>
            <div
              className="w-3/4 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
