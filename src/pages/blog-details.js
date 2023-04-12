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
import icon from  "../assets/image/banner/thum1.jpg";
import pic1 from  "../assets/image/banner/pic1.jpg";
import pic2 from  "../assets/image/banner/pic2.jpg";
import pic3 from  "../assets/image/banner/pic3.jpg";

import { EmployerServiceIml } from "../actions/admin-actions";

import { JobPostServiceIml } from "../actions/user-actions";

import axios from "axios";
import { API_BASE_URL, REDIRECT_BASE_URL } from "../utils/constants/url";
import { useTranslation } from 'react-i18next';
import './main.css';

const BlogDetails = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation();

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sidebarHeight, setSidebarHeight] = useState(undefined);
  const [contentTop, setContentTop] = useState(undefined);
  const [contentHeight, setContentHeight] = useState(undefined);
  const [scrollTop, setScrollTop] = useState(undefined);
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
    if (!(sidebarTop + sidebarHeight)) return;
 
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [scrollTop]);
 
  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.sidebar');
    setScrollTop(window.scrollY);
    const windowHeight = window.innerHeight;
    console.log("windowHeight",windowHeight);
    console.log("sidebarHeight",sidebarHeight);
    console.log("sidebarTop",sidebarTop);
    console.log("scrollTop",scrollTop)
    const side_barEl = document.querySelector('.side-bar');
    side_barEl.style.width = sidebarEl.getBoundingClientRect().width - 30 + 'px';
    if (scrollTop >= sidebarHeight - windowHeight ) {
      // sidebarEl.style.top = -(sidebarHeight + sidebarTop - 100 - windowHeight).toString() + 'px';
      if(document.querySelector('.button-comment').getBoundingClientRect().bottom < windowHeight )
      
      {
        side_barEl.style.bottom = windowHeight - document.querySelector('.button-comment').getBoundingClientRect().bottom + 'px';
      }
      else {
        side_barEl.style.bottom = windowHeight/7 +'px';
      }
      console.log("side_barEl.style.bottom",side_barEl.style.bottom);
      console.log("a", document.querySelector('.button-comment').getBoundingClientRect().bottom);
      side_barEl.style.position = 'fixed';
      
    }
    if (scrollTop < sidebarHeight - windowHeight)  {
      // sidebarEl.style.top = -(contentHeight + sidebarTop - 100 - windowHeight).toString() + 'px';
      side_barEl.style.position = 'relative';
      // sidebarEl.classList.remove('is-sticky');
    }
  }

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-content bg-white">
                <div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(../assets/image/banner/thum1.jpg)"}}>
                </div>
                <div className="content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 col-md-7 m-b10 blog-content">
                        <div className="blog-post blog-single blog-style-1">
                          <div className="dez-post-meta">
                            <ul className="d-flex align-items-center">
                              <li className="post-date"><i className="fa fa-calendar"></i>September 18, 2021</li>
                              <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                              <li className="post-comment"><i className="far fa-comments"></i><a href="#">5k</a> </li>
                            </ul>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title m-t0">Do you have a job that the average person doesnӴ even know exists?</h4>
                          </div>
                          <div className="dez-post-media dez-img-effect zoom-slow m-t20"><img src= {icon} alt=""/></div>
                          <div className="dez-post-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum
                              is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                              make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                              It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                              It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                            <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since
                              the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.</blockquote>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                              It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                            <h5>Completely Responsive</h5>
                            <img className="alignleft blog-side-img" src={pic1} alt=""/>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release</p>
                              <div className="dez-divider bg-gray-dark"></div>
                              <img className="alignright blog-side-img" src={pic1} alt=""/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                  Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                  It was popularised in the 1960s with the release</p>
                              </div>
                              <div className="dez-post-tags clear">
                                <div className="post-tags">
                                  <a href="javascript:void(0);">Child </a>
                                  <a href="javascript:void(0);">Eduction </a>
                                  <a href="javascript:void(0);">Money </a>
                                  <a href="javascript:void(0);">Resturent </a>
                                </div>
                              </div>
                              <div className="dez-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>
                              <div className="share-details-btn">
                                <ul>
                                  <li><h5 className="m-a0">Share Post</h5></li>
                                  <li><a href="javascript:void(0);" className="site-button facebook button-sm"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                                  <li><a href="javascript:void(0);" className="site-button google-plus button-sm"><i className="fab fa-google-plus-g"></i> Google Plus</a></li>
                                  <li><a href="javascript:void(0);" className="site-button linkedin button-sm"><i className="fab fa-linkedin-in"></i> Linkedin</a></li>
                                  <li><a href="javascript:void(0);" className="site-button instagram button-sm"><i className="fab fa-instagram"></i> Instagram</a></li>
                                  <li><a href="javascript:void(0);" className="site-button twitter button-sm"><i className="fab fa-twitter"></i> Twitter</a></li>
                                  <li><a href="javascript:void(0);" className="site-button whatsapp button-sm"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
                                </ul>
                              </div>
                          </div>
                          <div className="clear" id="comment-list">
                            <div className="comments-area" id="comments">
                              <h2 className="comments-title">8 Comments</h2>
                              <div className="clearfix m-b20">
                                <ol className="comment-list">
                                  <li className="comment">
                                    <div className="comment-body">
                                      <div className="comment-author vcard"> <img className="avatar photo" src={pic1} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                      <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                        Nam vitae neque vitae sapien malesuada aliquet. </p>
                                      <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                    </div>
                                    <ol className="children">
                                      <li className="comment odd parent">
                                        <div className="comment-body">
                                          <div className="comment-author vcard"> <img className="avatar photo" src={pic2} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                          <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                            ac elementum ligula blandit ac.</p>
                                          <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                        </div>
                                        <ol className="children">
                                          <li className="comment odd parent">
                                            <div className="comment-body">
                                              <div className="comment-author vcard"> <img className="avatar photo" src={pic3} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                              <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                ac elementum ligula blandit ac.</p>
                                              <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                            </div>
                                          </li>
                                        </ol>
                                      </li>
                                    </ol>
                                  </li>
                                  <li className="comment">
                                    <div className="comment-body">
                                      <div className="comment-author vcard"> <img className="avatar photo" src={pic1} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                      <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                  <li className="comment">
                                    <div className="comment-body">
                                      <div className="comment-author vcard"> <img className="avatar photo" src={pic2} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                      <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                  <li className="comment">
                                    <div className="comment-body">
                                      <div className="comment-author vcard"> <img className="avatar photo" src={pic2} alt=""/> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                      <div className="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div className="reply"> <a href="javascript:void(0);" className="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                </ol>
                                <div className="comment-respond" id="respond">
                                  <h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{"display":"none"}} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h4>
                                  <form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                    <p className="comment-form-author">
                                      <label for="author">Name <span className="required">*</span></label>
                                      <input type="text" value="Author" name="Author" placeholder="Author" id="author"/>
                                    </p>
                                    <p className="comment-form-email">
                                      <label for="email">Email <span className="required">*</span></label>
                                      <input type="text" value="email" placeholder="Email" name="email" id="email"/>
                                    </p>
                                    <p className="comment-form-url">
                                      <label for="url">Website</label>
                                      <input type="text" value="url" placeholder="Website" name="url" id="url"/>
                                    </p>
                                    <p className="comment-form-comment">
                                      <label for="comment">Comment</label>
                                      <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                    </p>
                                    <p className="form-submit">
                                      <input type="submit" value="Post Comment" className="submit site-button btn-green button-comment" id="submit" name="submit"/>
                                    </p>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 sticky-top sidebar" style={{ width: sidebarWidth }}>
                          <aside className="side-bar">
                            <div className="widget">
                              <h6 className="widget-title style-1">Search</h6>
                              <div className="search-bx style-1">
                                <form role="search" method="post">
                                  <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
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
                                  <div className="dez-post-media"> <img src={pic1} width="200" height="143" alt=""/> </div>
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
                                  <div className="dez-post-media"> <img src={pic2} width="200" height="160" alt=""/> </div>
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
                                  <div className="dez-post-media"> <img src={pic3} width="200" height="160" alt=""/> </div>
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
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} className="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
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
                                    <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email"/>
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
export default BlogDetails;
