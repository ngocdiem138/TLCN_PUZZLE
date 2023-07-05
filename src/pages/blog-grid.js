import React, { useState, useEffect } from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useLocation } from '@reach/router';
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import Paginate from "../helpers/PaginateBlog";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import iconD from "../assets/image/svg/icon-dolor.svg";
import iconB from "../assets/image/svg/icon-briefcase.svg";
import iconL from "../assets/image/svg/icon-location.svg";
import iconC from "../assets/image/svg/cityscape-town-svgrepo-com.svg";
import icon from "../assets/image/banner/thum1.jpg";
import pic1 from "../assets/image/banner/pic1.jpg";
import pic2 from "../assets/image/banner/pic2.jpg";
import pic3 from "../assets/image/banner/pic3.jpg";

import { EmployerServiceIml } from "../actions/admin-actions";

import { BlogServiceIml, JobPostServiceIml } from "../actions/user-actions";

import axios from "axios";
import { API_BASE_URL, REDIRECT_BASE_URL } from "../utils/constants/url";
import { useTranslation } from 'react-i18next';
import './main.css';

const BlogGrid = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation();

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sidebarHeight, setSidebarHeight] = useState(undefined);
  const [contentTop, setContentTop] = useState(undefined);
  const [contentHeight, setContentHeight] = useState(undefined);
  const [scrollTop, setScrollTop] = useState(undefined);
  const [screenSize, setScreenSize] = useState(undefined);
  const [blogPost, setBlogPost] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPost.slice(indexOfFirstPost, indexOfLastPost);

  

  const paginate = (pageNumber) => {
    console.log("pageNumber", pageNumber)
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(blogPost.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    setScrollTop(window.scrollY);
    const sidebarEl = document.querySelector('.side-bar').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarHeight(sidebarEl.height);
    console.log(sidebarEl.height);
    setSidebarTop(sidebarEl.top);
    const contentEl = document.querySelector('.blog-content').getBoundingClientRect();
    if(contentEl.height < sidebarEl.height) {
      document.querySelector('.blog-content').style.height = sidebarEl.height + "px";
    }
    setContentHeight(contentEl.height);
    setContentTop(contentEl.top);
  }, [scrollTop]);

  useEffect(() => {
    // Fetch initial blog posts or perform any other necessary initialization logic
    BlogServiceIml.getAllBlogPost().then((response) => {
      if (response.data.errCode === "UNAUTHORIZED_ERROR") {
        setShowError403(true);
      } else {
        setBlogPost(response.data.data.content);
      }
    });
    BlogServiceIml.getAllCategoryAndPostAmount().then((response) => {
      if (response.data.errCode === "UNAUTHORIZED_ERROR") {
        setShowError403(true);
      } else {
        setCategoryList(response.data.data);
      }
    });
  }, []);

  const viewByCategory = (categoryId) => {
    if (categoryId) {
      BlogServiceIml.getAllBlogPostByCategoryId(categoryId)
        .then((response) => {
          if (response.data.errCode === "UNAUTHORIZED_ERROR") {
            setShowError403(true);
          } else {
            setBlogPost(response.data.data.content);
          }
        })
        .catch((error) => {
          // Handle error if necessary
        });
    }
  };

  const listBlogPost = currentPosts.map(blogPost => {
    return <div className="post card-container col-lg-6 col-md-6 col-sm-6">
      <div className="blog-post blog-grid blog-style-1">
        <div className="dez-post-media dez-img-effect radius-sm"> <a href={"/blog-details?id=" + blogPost.id}><img src={blogPost.thumbnail} alt="" /></a> </div>
        <div className="dez-info">
          <div className="dez-post-meta">
            <ul className="d-flex align-items-center">
              <li className="post-date"><i className="fa fa-calendar"></i>{blogPost.createdAt ? blogPost.createdAt.split(' ')[0] : blogPost.createdAt}</li>
              <li className="post-comment"><i className="far fa-comments"></i><a href="#">{blogPost.comments ? blogPost.comments.length : blogPost.comments}</a> </li>
            </ul>
          </div>
          <div className="dez-post-title ">
            <h5 className="post-title font-20"><a href={"/blog-details?id=" + blogPost.id}>{blogPost.title}</a></h5>
          </div>
          <div className="dez-post-text">
            <p>{blogPost.tags}</p>
          </div>
          <div className="dez-post-readmore blog-share">
            <a href={"/blog-details?id=" + blogPost.id} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
          </div>
        </div>
      </div>
    </div>
  })

  const listCategory = categoryList.map(category => {
    return <li><a onClick={()=>viewByCategory(category.blogCategory.id)}>{category.blogCategory.name} ({category.blogPostAmount})</a></li>
  })

  const listRecentBlogPost = currentPosts.map(blogPost => {
    return <div className="widget-post clearfix">
    <div className="dez-post-media"> <img src={blogPost.thumbnail} alt="" /></div>
    <div className="dez-post-info">
      <div className="dez-post-header">
        <h6 className="post-title"><a href={"/blog-details?id=" + blogPost.id}>{blogPost.title}</a></h6>
      </div>
      <div className="dez-post-meta">
        <ul className="d-flex align-items-center">
          <li className="post-date"><i className="fa fa-calendar"></i>{blogPost.createdAt ? blogPost.createdAt.split(' ')[0] : blogPost.createdAt}</li>
          <li className="post-comment"><a href="#"><i className="far fa-comments"></i>{blogPost.comments ? blogPost.comments.length : blogPost.comments}</a> </li>
        </ul>
      </div>
    </div>
  </div>
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      const sidebarEl = document.querySelector('.sidebar');
      const side_barEl = document.querySelector('.side-bar');
      side_barEl.style.width = sidebarEl.getBoundingClientRect().width - 30 + 'px';
    });
    if (getWidthByClassName('blog-content-container') - getWidthByClassName('masonry') <= 0) {
      const side_barEl = document.querySelector('.side-bar');
      side_barEl.style.position = 'relative';
      side_barEl.style.bottom = '0px';
      // side_barEl.style.paddingTop = '10rem';
    } else {
      isSticky();
    }
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      })
    }

  }, [screenSize]);

  const getWidthByClassName = (id) => {
    return document.querySelector('#' + id).getBoundingClientRect().width;
  }


  useEffect(() => {
    if (!(sidebarTop + sidebarHeight)) return;
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [scrollTop]);

  const isSticky = (e) => {
    if (getWidthByClassName('blog-content-container') - getWidthByClassName('masonry') <= 10) {
      const side_barEl = document.querySelector('.side-bar');
      side_barEl.style.position = 'relative';
      side_barEl.style.bottom = '0px';
      return
    };
    const sidebarEl = document.querySelector('.sidebar');
    setScrollTop(window.scrollY);
    const windowHeight = window.innerHeight;
    console.log("windowHeight", windowHeight);
    console.log("sidebarHeight", sidebarHeight);
    console.log("sidebarTop", sidebarTop);
    console.log("scrollTop", scrollTop)
    const side_barEl = document.querySelector('.side-bar');
    // side_barEl.style.paddingTop = '0px';
    side_barEl.style.width = sidebarEl.getBoundingClientRect().width - 30 + 'px';
    if (scrollTop >= sidebarHeight - windowHeight) {
      // sidebarEl.style.top = -(sidebarHeight + sidebarTop - 100 - windowHeight).toString() + 'px';
      if (document.querySelector('.pagination-bx').getBoundingClientRect().bottom < windowHeight) {
        side_barEl.style.bottom = windowHeight - document.querySelector('.pagination-bx').getBoundingClientRect().bottom + 'px';
      }
      else {
        side_barEl.style.bottom = windowHeight / 7 + 'px';
      }
      console.log("side_barEl.style.bottom", side_barEl.style.bottom);
      console.log("a", document.querySelector('.pagination-bx').getBoundingClientRect().bottom);
      side_barEl.style.position = 'fixed';
    }
    if (scrollTop < sidebarHeight - windowHeight || sidebarHeight < windowHeight) {
      // sidebarEl.style.top = -(contentHeight + sidebarTop - 100 - windowHeight).toString() + 'px';
      side_barEl.style.position = 'relative';
      side_barEl.style.bottom = '0px';
      // sidebarEl.classList.remove('is-sticky');
    }
  }

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-content bg-white" style={{ "width": "100%" }}>
                <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(../assets/image/banner/thum1.jpg)" }}>
                </div>
                <div className="content-area">
                  <div className="container">
                    <div className="row" id="blog-content-container">
                      <div className="col-lg-8 col-md-7 col-sm-12">
                        <div id="masonry" className="dez-blog-grid-3 row blog-content">
                          {listBlogPost.length ? listBlogPost : <h3 className="text-center">No blog post with your filter or category!!</h3>}
                        </div>
                        <div className="pagination-bx clearfix text-center" style={{ padding: "5rem" }}>
                          <Paginate
                            postsPerPage={postsPerPage}
                            totalPosts={blogPost.length}
                            paginate={paginate}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            selectedPage={currentPage}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-5 sticky-top sidebar">
                        <aside className="side-bar">
                          <div className="widget">
                            <h6 className="widget-title style-1">Search</h6>
                            <div className="search-bx style-1">
                              <form role="search" method="post">
                                <div className="input-group">
                                  <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                  <span className="input-group-btn">
                                    <button type="submit" className="fa fa-search text-primary"></button>
                                  </span>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="widget recent-posts-entry">
                            <h6 className="widget-title style-1">Recent Posts</h6>
                            <div className="widget-post-bx">
                              {listRecentBlogPost}
                            </div>
                          </div>

                          <div className="widget widget_archive">
                            <h6 className="widget-title style-1">Categories List</h6>
                            <ul>
                              {listCategory}
                            </ul>
                          </div>

                          <div className="widget widget-newslatter">
                            <h6 className="widget-title style-1">Newsletter</h6>
                            <div className="news-box">
                              <p>Enter your e-mail and subscribe to our newsletter.</p>
                              <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                <div className="dzSubscribeMsg"></div>
                                <div className="input-group">
                                  <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
                                  <button name="submit" value="Submit" type="submit" className="site-button btn-block btn-green">Subscribe Now</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default BlogGrid;
