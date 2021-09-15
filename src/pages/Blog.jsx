import React from "react";
import BlogBody from "../components/Blog/BlogBody";
import BlogLandingCard from "../components/UI/LandingCard/BlogLandingCard";
import RecentBlogs from "../components/Blog/RecentBlogs";
import blog1 from "../blogs/blog1";
import blog2 from "../blogs/blog2";
import blog3 from "../blogs/blog3";

const Blog = (props) => {
  let blog = blog1;
  const id = parseInt(props.match.params.id);

  switch (id) {
    case 1:
      blog = blog1;
      break;
    case 2:
      blog = blog2;
      break;
    case 3:
      blog = blog3;
      break;
    default:
      blog = blog1;
  }

  return (
    <div>
      <BlogLandingCard heading={blog.heading} subHeading={blog.subHeading} cover={blog.cover} />
      <BlogBody content={blog.content} />
      <hr className="m-5" />

      <RecentBlogs />
    </div>
  );
};

export default Blog;
