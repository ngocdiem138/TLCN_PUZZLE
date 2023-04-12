import React, { useState, useEffect } from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useLocation } from '@reach/router';
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";

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

import { JobPostServiceIml } from "../actions/user-actions";

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
  useEffect(() => {
    setScrollTop(window.scrollY);
    const sidebarEl = document.querySelector('.side-bar').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarHeight(sidebarEl.height);
    console.log(sidebarEl.height);
    setSidebarTop(sidebarEl.top);
    const contentEl = document.querySelector('.blog-content').getBoundingClientRect();
    setContentHeight(contentEl.height);
    setContentTop(contentEl.top);

  }, [scrollTop]);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      const sidebarEl = document.querySelector('.sidebar');
      const side_barEl = document.querySelector('.side-bar');
      side_barEl.style.width = sidebarEl.getBoundingClientRect().width - 30 + 'px';
    });
    if (getWidthByClassName('blog-content-container') - getWidthByClassName('masonry') <= 10) {
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
    if (scrollTop < sidebarHeight - windowHeight) {
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
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic3} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post card-container col-lg-6 col-md-6 col-sm-6">
                            <div className="blog-post blog-grid blog-style-1">
                              <div className="dez-post-media dez-img-effect radius-sm"> <a href="blog-details.html"><img src={pic1} alt="" /></a> </div>
                              <div className="dez-info">
                                <div className="dez-post-meta">
                                  <ul className="d-flex align-items-center">
                                    <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                                    <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                                  </ul>
                                </div>
                                <div className="dez-post-title ">
                                  <h5 className="post-title font-20"><a href="blog-details.html">Do you have a job that the average person doesnӴ even know exists?</a></h5>
                                </div>
                                <div className="dez-post-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="dez-post-readmore blog-share">
                                  <a href="blog-details.html" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pagination-bx clearfix text-center" style={{padding: "5rem"}}>
                          <ul className="pagination">
                            <li className="previous"><a href="javascript:void(0);"><i className="ti-arrow-left"></i> Prev</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="javascript:void(0);">2</a></li>
                            <li><a href="javascript:void(0);">3</a></li>
                            <li className="next"><a href="javascript:void(0);">Next <i className="ti-arrow-right"></i></a></li>
                          </ul>
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
                              <div className="widget-post clearfix">
                                <div className="dez-post-media"> <img src={pic1} width="200" height="143" alt="" /> </div>
                                <div className="dez-post-info">
                                  <div className="dez-post-header">
                                    <h6 className="post-title"><a href="blog-details.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h6>
                                  </div>
                                  <div className="dez-post-meta">
                                    <ul className="d-flex align-items-center">
                                      <li className="post-date"><i className="fa fa-calendar"></i>Sep 18, 2021</li>
                                      <li className="post-comment"><a href="#"><i className="far fa-comments"></i>5k</a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-post clearfix">
                                <div className="dez-post-media"> <img src={pic2} width="200" height="160" alt="" /> </div>
                                <div className="dez-post-info">
                                  <div className="dez-post-header">
                                    <h6 className="post-title"><a href="blog-details.html">Do you have a job that the average person doesn’t even know exists?</a></h6>
                                  </div>
                                  <div className="dez-post-meta">
                                    <ul className="d-flex align-items-center">
                                      <li className="post-date"><i className="fa fa-calendar"></i>Sep 18, 2021</li>
                                      <li className="post-comment"><a href="#"><i className="far fa-comments"></i>5k</a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-post clearfix">
                                <div className="dez-post-media"> <img src={pic3} width="200" height="160" alt="" /> </div>
                                <div className="dez-post-info">
                                  <div className="dez-post-header">
                                    <h6 className="post-title"><a href="blog-details.html">Using Banner Stands To Increase Trade Show Traffic</a></h6>
                                  </div>
                                  <div className="dez-post-meta">
                                    <ul className="d-flex align-items-center">
                                      <li className="post-date"><i className="fa fa-calendar"></i>Sep 18, 2021</li>
                                      <li className="post-comment"><a href="#"><i className="far fa-comments"></i>5k</a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="widget widget_gallery gallery-grid-3">
                            <h6 className="widget-title style-1">Our services</h6>
                            <ul className="lightgallery">
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                              <li>
                                <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                  <img src={pic1} alt="" />
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="widget widget_archive">
                            <h6 className="widget-title style-1">Categories List</h6>
                            <ul>
                              <li><a href="javascript:void(0);">aciform</a></li>
                              <li><a href="javascript:void(0);">championship</a></li>
                              <li><a href="javascript:void(0);">chastening</a></li>
                              <li><a href="javascript:void(0);">clerkship</a></li>
                              <li><a href="javascript:void(0);">disinclination</a></li>
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
