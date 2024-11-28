import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./PostSlice";
const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  // console.log(posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className=" container mx-auto px-10">
      <h2 className="text-3xl font-bold mb-5">Total post {posts.length} </h2>
      {isLoading && <h3> Loading.....</h3>}
      {error && <h3> {error}</h3>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {posts &&
          posts.map((post) => {
            return (
              <section key={post.id}>
                <article className="shadow-lg p-5 h-48 rounded-md">
                  <h2 className="font-bold mb-2">{post.title} </h2>
                  <p>{post.body} </p>
                </article>
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default PostsView;
