import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to My Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm ">
          Welcome to my blog, where you’ll find a wide range of articles and
          tutorials on web development, software engineering, and programming
          languages. Whether you’re a beginner eager to learn or an experienced
          developer looking to enhance your skills, my content is designed to
          educate, inspire, and guide you through the ever-evolving world of
          technology.
        </p>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
          style={{ width: "fit-content" }}
        >
          View All Posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-5 justify-center ">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
