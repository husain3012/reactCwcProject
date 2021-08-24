import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import blog1 from "../../blogs/blog1";
import blog2 from "../../blogs/blog2";
import blog3 from "../../blogs/blog3";

const BlogCardText = styled.div`
  h1 {
    color: #000;
  }
  .about-blog-card {
    color: #716f81;
  }
  .published-date {
    color: #716f81;
    margin-top: 10px;
  }
`;
const BlogCardDiv = styled.div`
  margin: 1rem;

  .blog-card-image {
    height: 200px;
    background-image: url(${(props) => props.cover});
    background-size: cover;
    background-position: center;

  }
  transition: transform 0.5s;

:hover{
    transform: scale(1.1);
    transition: transform 0.5s;
}

`;

const BlogCard = (props) => {
  return (
    <BlogCardDiv cover={props.cover}>
      <div className="blog-card-image"></div>
      <BlogCardText>
        <p className="published-date">{props.date}</p>
        <h1>{props.heading}</h1>
        <p className="about-blog-card">{props.about}</p>
      </BlogCardText>
    </BlogCardDiv>
  );
};

const RecentBlogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-12">
          <Link style={{ textDecoration: "none" }} to="/blogs/1">
            <BlogCard 
            cover={blog1.cover}
            heading={blog1.heading} 
            date={blog1.date}
            about={blog1.subHeading} />
          </Link>
        </div>
        <div className="col-md-4 col-12">
        <Link style={{ textDecoration: "none" }} to="/blogs/2">
        <BlogCard 
            cover={blog2.cover}
            heading={blog2.heading} 
            date={blog2.date}
            about={blog2.subHeading} />
          </Link>
        </div>
        <div className="col-md-4 col-12">
        <Link style={{ textDecoration: "none" }} to="/blogs/3">
        <BlogCard 
            cover={blog3.cover}
            heading={blog3.heading} 
            date={blog3.date}
            about={blog3.subHeading} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
