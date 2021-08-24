import React from "react";
import BlogHeader from "../components/Blog/BlogHeader";
import BlogBody from "../components/Blog/BlogBody";
import RecentBlogs from "../components/Blog/RecentBlogs";
import blog1 from "../blogs/blog1";
import blog2 from "../blogs/blog2";
import blog3 from "../blogs/blog3";
const Blog = () => {
  return (
    <div>
      <BlogHeader heading={blog1.heading} 
      subHeading={blog1.subHeading}
      cover={blog1.cover} />
      <BlogBody content = {blog1.content} />
      <hr className="m-5" />

      <RecentBlogs />
    </div>
  );
};

export default Blog;
