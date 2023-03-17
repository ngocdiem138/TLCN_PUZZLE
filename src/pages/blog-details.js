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

const JobDetails = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation();

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              <div class="page-content bg-white">
                <div class="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(../assets/image/banner/thum1.jpg)"}}>
                  <div class="container">
                    <div class="dez-bnr-inr-entry">
                      <h1 class="text-white">Blog Details</h1>
                      <div class="breadcrumb-row">
                        <ul class="list-inline">
                          <li><a href="index.html">Home</a></li>
                          <li>Blog Details</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-area">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8 col-md-7 m-b10">
                        <div class="blog-post blog-single blog-style-1">
                          <div class="dez-post-meta">
                            <ul class="d-flex align-items-center">
                              <li class="post-date"><i class="fa fa-calendar"></i>September 18, 2021</li>
                              <li class="post-author"><i class="fa fa-user"></i>By <a href="#">demongo</a> </li>
                              <li class="post-comment"><i class="far fa-comments"></i><a href="#">5k</a> </li>
                            </ul>
                          </div>
                          <div class="dez-post-title">
                            <h4 class="post-title m-t0">Do you have a job that the average person doesnӴ even know exists?</h4>
                          </div>
                          <div class="dez-post-media dez-img-effect zoom-slow m-t20"><img src= {icon} alt=""/></div>
                          <div class="dez-post-text">
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
                            <img class="alignleft blog-side-img" src={pic1} alt=""/>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release</p>
                              <div class="dez-divider bg-gray-dark"></div>
                              <img class="alignright blog-side-img" src={pic1} alt=""/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                  Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                  It was popularised in the 1960s with the release</p>
                              </div>
                              <div class="dez-post-tags clear">
                                <div class="post-tags">
                                  <a href="javascript:void(0);">Child </a>
                                  <a href="javascript:void(0);">Eduction </a>
                                  <a href="javascript:void(0);">Money </a>
                                  <a href="javascript:void(0);">Resturent </a>
                                </div>
                              </div>
                              <div class="dez-divider bg-gray-dark op4"><i class="icon-dot c-square"></i></div>
                              <div class="share-details-btn">
                                <ul>
                                  <li><h5 class="m-a0">Share Post</h5></li>
                                  <li><a href="javascript:void(0);" class="site-button facebook button-sm"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                                  <li><a href="javascript:void(0);" class="site-button google-plus button-sm"><i class="fab fa-google-plus-g"></i> Google Plus</a></li>
                                  <li><a href="javascript:void(0);" class="site-button linkedin button-sm"><i class="fab fa-linkedin-in"></i> Linkedin</a></li>
                                  <li><a href="javascript:void(0);" class="site-button instagram button-sm"><i class="fab fa-instagram"></i> Instagram</a></li>
                                  <li><a href="javascript:void(0);" class="site-button twitter button-sm"><i class="fab fa-twitter"></i> Twitter</a></li>
                                  <li><a href="javascript:void(0);" class="site-button whatsapp button-sm"><i class="fab fa-whatsapp"></i> Whatsapp</a></li>
                                </ul>
                              </div>
                          </div>
                          <div class="clear" id="comment-list">
                            <div class="comments-area" id="comments">
                              <h2 class="comments-title">8 Comments</h2>
                              <div class="clearfix m-b20">
                                <ol class="comment-list">
                                  <li class="comment">
                                    <div class="comment-body">
                                      <div class="comment-author vcard"> <img class="avatar photo" src={pic1} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                      <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                        Nam vitae neque vitae sapien malesuada aliquet. </p>
                                      <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                    </div>
                                    <ol class="children">
                                      <li class="comment odd parent">
                                        <div class="comment-body">
                                          <div class="comment-author vcard"> <img class="avatar photo" src={pic2} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                          <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                            ac elementum ligula blandit ac.</p>
                                          <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                        </div>
                                        <ol class="children">
                                          <li class="comment odd parent">
                                            <div class="comment-body">
                                              <div class="comment-author vcard"> <img class="avatar photo" src={pic3} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                              <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                ac elementum ligula blandit ac.</p>
                                              <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                            </div>
                                          </li>
                                        </ol>
                                      </li>
                                    </ol>
                                  </li>
                                  <li class="comment">
                                    <div class="comment-body">
                                      <div class="comment-author vcard"> <img class="avatar photo" src={pic1} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                      <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                  <li class="comment">
                                    <div class="comment-body">
                                      <div class="comment-author vcard"> <img class="avatar photo" src={pic2} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                      <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                  <li class="comment">
                                    <div class="comment-body">
                                      <div class="comment-author vcard"> <img class="avatar photo" src={pic2} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                      <div class="comment-meta"> <a href="javascript:void(0);">October 6, 2021 at 7:15 am</a> </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                        ac elementum ligula blandit ac.</p>
                                      <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link">Reply</a> </div>
                                    </div>
                                  </li>
                                </ol>
                                <div class="comment-respond" id="respond">
                                  <h4 class="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{"display":"none"}} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h4>
                                  <form class="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                    <p class="comment-form-author">
                                      <label for="author">Name <span class="required">*</span></label>
                                      <input type="text" value="Author" name="Author" placeholder="Author" id="author"/>
                                    </p>
                                    <p class="comment-form-email">
                                      <label for="email">Email <span class="required">*</span></label>
                                      <input type="text" value="email" placeholder="Email" name="email" id="email"/>
                                    </p>
                                    <p class="comment-form-url">
                                      <label for="url">Website</label>
                                      <input type="text" value="url" placeholder="Website" name="url" id="url"/>
                                    </p>
                                    <p class="comment-form-comment">
                                      <label for="comment">Comment</label>
                                      <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                    </p>
                                    <p class="form-submit">
                                      <input type="submit" value="Post Comment" class="submit site-button btn-green" id="submit" name="submit"/>
                                    </p>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-5 sticky-top">
                          <aside class="side-bar">
                            <div class="widget">
                              <h6 class="widget-title style-1">Search</h6>
                              <div class="search-bx style-1">
                                <form role="search" method="post">
                                  <div class="input-group">
                                    <input name="text" class="form-control" placeholder="Enter your keywords..." type="text"/>
                                      <span class="input-group-btn">
                                        <button type="submit" class="fa fa-search text-primary"></button>
                                      </span>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div class="widget recent-posts-entry">
                              <h6 class="widget-title style-1">Recent Posts</h6>
                              <div class="widget-post-bx">
                                <div class="widget-post clearfix">
                                  <div class="dez-post-media"> <img src={pic1} width="200" height="143" alt=""/> </div>
                                  <div class="dez-post-info">
                                    <div class="dez-post-header">
                                      <h6 class="post-title"><a href="blog-details.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h6>
                                    </div>
                                    <div class="dez-post-meta">
                                      <ul class="d-flex align-items-center">
                                        <li class="post-date"><i class="fa fa-calendar"></i>Sep 18, 2021</li>
                                        <li class="post-comment"><a href="#"><i class="far fa-comments"></i>5k</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div class="widget-post clearfix">
                                  <div class="dez-post-media"> <img src={pic2} width="200" height="160" alt=""/> </div>
                                  <div class="dez-post-info">
                                    <div class="dez-post-header">
                                      <h6 class="post-title"><a href="blog-details.html">Do you have a job that the average person doesn’t even know exists?</a></h6>
                                    </div>
                                    <div class="dez-post-meta">
                                      <ul class="d-flex align-items-center">
                                        <li class="post-date"><i class="fa fa-calendar"></i>Sep 18, 2021</li>
                                        <li class="post-comment"><a href="#"><i class="far fa-comments"></i>5k</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div class="widget-post clearfix">
                                  <div class="dez-post-media"> <img src={pic3} width="200" height="160" alt=""/> </div>
                                  <div class="dez-post-info">
                                    <div class="dez-post-header">
                                      <h6 class="post-title"><a href="blog-details.html">Using Banner Stands To Increase Trade Show Traffic</a></h6>
                                    </div>
                                    <div class="dez-post-meta">
                                      <ul class="d-flex align-items-center">
                                        <li class="post-date"><i class="fa fa-calendar"></i>Sep 18, 2021</li>
                                        <li class="post-comment"><a href="#"><i class="far fa-comments"></i>5k</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="widget widget_gallery gallery-grid-3">
                              <h6 class="widget-title style-1">Our services</h6>
                              <ul class="lightgallery">
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                                <li>
                                  <span data-exthumbimage={pic1} data-src={pic1} class="lightimg dez-img-overlay1 dez-img-effect zoom-slow" title="Maintenance">
                                    <img src={pic1} alt=""/>
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div class="widget widget_archive">
                              <h6 class="widget-title style-1">Categories List</h6>
                              <ul>
                                <li><a href="javascript:void(0);">aciform</a></li>
                                <li><a href="javascript:void(0);">championship</a></li>
                                <li><a href="javascript:void(0);">chastening</a></li>
                                <li><a href="javascript:void(0);">clerkship</a></li>
                                <li><a href="javascript:void(0);">disinclination</a></li>
                              </ul>
                            </div>

                            <div class="widget widget-newslatter">
                              <h6 class="widget-title style-1">Newsletter</h6>
                              <div class="news-box">
                                <p>Enter your e-mail and subscribe to our newsletter.</p>
                                <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                  <div class="dzSubscribeMsg"></div>
                                  <div class="input-group">
                                    <input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email"/>
                                      <button name="submit" value="Submit" type="submit" class="site-button btn-block btn-green">Subscribe Now</button>
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
export default JobDetails;
