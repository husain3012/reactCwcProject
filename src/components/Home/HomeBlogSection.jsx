import React from "react";
import RecentBlogs from "../Blog/RecentBlogs";

const HomeBlogSection = () => {
  return (
    <div className="wealth-section-space">
      <div className="container">
        <div className="row d-flex">
          <div className="col-12">
            <div className="d-flex flex-row">
              <div className="flex-fill">
                <h2 className="wealth-section-title mb-6">Recent Blogs</h2>
              </div>
              <div className="d-flex text-right">
                <svg className="home-svg-sprite glider-prev blog-back-arrow scroll-back-arrow arrow-disabled" height="30px" width="30px">
                  <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-before"></use>
                </svg>
                <svg className="home-svg-sprite glider-next blog-forward-arrow scroll-back-arrow" height="30px" width="30px">
                  <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-next"></use>
                </svg>
              </div>
            </div>
            <p className="wealth-section-description text-black">Insights to help your grow.</p>
          </div>
        </div>
        <RecentBlogs />
      </div>
    </div>
  );
};

export default HomeBlogSection;
