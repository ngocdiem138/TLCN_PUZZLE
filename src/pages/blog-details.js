import React, { useState, useEffect } from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import icon from "../assets/image/banner/thum1.jpg";
import pic1 from "../assets/image/banner/pic1.jpg";
import pic2 from "../assets/image/banner/pic2.jpg";
import pic3 from "../assets/image/banner/pic3.jpg";
import { useLocation } from "@reach/router";
import { parse } from "query-string";
import './main.css';
import { useTranslation } from 'react-i18next';
import { BlogServiceIml } from "../actions/user-actions";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import Comment from "../components/Comment";
import AddComment from "../components/AddComment";
import "../components/Styles/App.scss";

const BlogDetails = () => {
  const [comments, updateComments] = useState([]);
  const [deleteModalState, setDeleteModalState] = useState(false);

  const getData = async () => {
    const res = await fetch("./data/data.json");
    const data = await res.json();
    updateComments(data.comments);
  };

  useEffect(() => {
    localStorage.getItem("comments") !== null
      ? updateComments(JSON.parse(localStorage.getItem("comments")))
      : getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    deleteModalState
      ? document.body.classList.add("overflow--hidden")
      : document.body.classList.remove("overflow--hidden");
  }, [comments, deleteModalState]);

  // update score
  let updateScore = (score, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.score = score;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.score = score;
          }
        });
      });
    }
    updateComments(updatedComments);
  };

  // add comments
  let addComments = (newComment) => {
    let updatedComments = [...comments, newComment];
    updateComments(updatedComments);
  };

  // add replies
  let updateReplies = (replies, id) => {
    let updatedComments = [...comments];
    updatedComments.forEach((data) => {
      if (data.id === id) {
        data.replies = [...replies];
      }
    });
    updateComments(updatedComments);
  };

  // edit comment
  let editComment = (content, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.content = content;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.content = content;
          }
        });
      });
    }

    updateComments(updatedComments);
  };

  // delete comment
  let commentDelete = (id, type, parentComment) => {
    let updatedComments = [...comments];
    let updatedReplies = [];

    if (type === "comment") {
      updatedComments = updatedComments.filter((data) => data.id !== id);
    } else if (type === "reply") {
      comments.forEach((comment) => {
        if (comment.id === parentComment) {
          updatedReplies = comment.replies.filter((data) => data.id !== id);
          comment.replies = updatedReplies;
        }
      });
    }

    updateComments(updatedComments);
  };

  var data = [
    {
      "userId": "01a",
      "comId": "012",
      "fullName": "Riya Negi",
      "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
      "text": "Hey, Loved your blog! ",
      "replies": [
        {
          "userId": "02a",
          "comId": "013",
          "fullName": "Adam Scott",
          "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
          "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
        },
        {
          "userId": "01a",
          "comId": "014",

          "fullName": "Riya Negi",
          "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
          "text": "thanks!😊"
        }
      ]
    },
    {
      "userId": "02a",
      "comId": "07",
      "fullName": "Adam Scott",
      "text": "Follow my page for more such interesting blogs!😇",
      "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random"
    },
    {
      "userId": "02a",
      "comId": "015",
      "fullName": "Robert Jae",
      "avatarUrl": "https://ui-avatars.com/api/name=Robert&background=random",
      "text": "Woah pretty helpful! how did you solve for x?",
      "replies": [
        {
          "userId": "01b",
          "comId": "016",

          "fullName": "Adam Scott",
          "text": "Thanks! refer to this link -> acs.com",
          "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random"
        }
      ]
    },
    {
      "userId": "02b",
      "comId": "017",
      "fullName": "Lily",
      "text": "I have a doubt about the 4th point🤔",
      "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
    }
  ]

  const [comment, setComment] = useState([
    {
      "userId": "01a",
      "comId": "012",
      "fullName": "Riya Negi",
      "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
      "text": "Hey, Loved your blog! ",
      "replies": [
        {
          "userId": "02a",
          "comId": "013",
          "fullName": "Adam Scott",
          "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
          "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
        },
        {
          "userId": "01a",
          "comId": "014",

          "fullName": "Riya Negi",
          "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
          "text": "thanks!😊"
        }
      ]
    },
    {
      "userId": "02a",
      "comId": "07",
      "fullName": "Adam Scott",
      "text": "Follow my page for more such interesting blogs!😇",
      "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random"
    },
    {
      "userId": "02a",
      "comId": "015",
      "fullName": "Robert Jae",
      "avatarUrl": "https://ui-avatars.com/api/name=Robert&background=random",
      "text": "Woah pretty helpful! how did you solve for x?",
      "replies": [
        {
          "userId": "01b",
          "comId": "016",

          "fullName": "Adam Scott",
          "text": "Thanks! refer to this link -> acs.com",
          "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random"
        }
      ]
    },
    {
      "userId": "02b",
      "comId": "017",
      "fullName": "Lily",
      "text": "I have a doubt about the 4th point🤔",
      "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
    }
  ]);
  const userId = "01a";
  const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random";
  const name = "xyz";
  const signinUrl = "/signin";
  const signupUrl = "/signup";
  let count = 0;
  comment.map((i) => {
    count += 1;
    i.replies && i.replies.map((i) => (count += 1));
  });

  const [textEditable, setTextEditable] = useState("");

  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const customInputFunc = (props) => {
    return (
      <CustomInputt
        parentId={props.parentId}
        cancellor={props.cancellor}
        value={props.value}
        edit={props.edit}
        submit={props.submit}
        handleCancel={props.handleCancel}
      />
    );
  };
  const { t, i18n } = useTranslation()

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sidebarHeight, setSidebarHeight] = useState(undefined);
  const [contentTop, setContentTop] = useState(undefined);
  const [contentHeight, setContentHeight] = useState(undefined);
  const [scrollTop, setScrollTop] = useState(undefined);
  const [blogDetail, setBlogDetail] = useState("");
  const location = useLocation();
  const searchParams = parse(location.search);
  const id = searchParams.id;
  useEffect(() => {
    BlogServiceIml.getBlogPostById(id).then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError403(true);
      } else {
        setBlogDetail(response.data.data);
      }
    });
  }, [id])
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

  const getWidthByClassName = (id) => {
    return document.querySelector('#' + id).getBoundingClientRect().width;
  }

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
      if (document.querySelector('.comment-respond-bottom').getBoundingClientRect().bottom < windowHeight) {
        side_barEl.style.bottom = windowHeight - document.querySelector('.comment-respond-bottom').getBoundingClientRect().bottom + 'px';
      }
      else {
        side_barEl.style.bottom = windowHeight / 7 + 'px';
      }
      console.log("side_barEl.style.bottom", side_barEl.style.bottom);
      console.log("a", document.querySelector('.comment-respond-bottom').getBoundingClientRect().bottom);
      side_barEl.style.position = 'fixed';
    }
    if (scrollTop < sidebarHeight - windowHeight) {
      // sidebarEl.style.top = -(contentHeight + sidebarTop - 100 - windowHeight).toString() + 'px';
      side_barEl.style.position = 'relative';
      side_barEl.style.bottom = '0px';
      // sidebarEl.classList.remove('is-sticky');
    }
  }

  const getTag = (tags) => {
    if (tags) {
      tags = tags.slice(1);
    }
    let arr = tags ? tags.split('#') : [];
    let tagElements = arr.map((element) => (
      <a href="javascript:void(0);">{element}</a>
    ));
    return tagElements;
  };

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12" >
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-content bg-white">
                <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: blogDetail.thumbnail }}>
                </div>
                <div className="content-area" style={{ backgroundColor: "#f5f6fa" }}>
                  <div className="container">
                    <div className="row" id="blog-content-container">
                      <div className="col-lg-8 col-md-7 m-b10 blog-content">
                        <div className="blog-post blog-single blog-style-1" id="masonry">
                          <div className="dez-post-meta">
                            <ul className="d-flex align-items-center">
                              <li className="post-date"><i className="fa fa-calendar"></i>{blogDetail.createdAt}</li>
                              <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                              <li className="post-comment"><i className="far fa-comments"></i><a href="#">{blogDetail.comments ? blogDetail.comments.length : blogDetail.comments}</a> </li>
                            </ul>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title m-t0">{blogDetail.title}</h4>
                          </div>
                          <div className="dez-post-media dez-img-effect zoom-slow m-t20 thumbnail"><img src={blogDetail.thumbnail} alt="" /></div>
                          <div className="dez-post-text" dangerouslySetInnerHTML={{ __html: blogDetail.body }}>
                          </div>
                          <div className="dez-post-tags clear">
                            <div className="post-tags">
                              {getTag(blogDetail.tags)}
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
                        <div className="clear" id="comment-list" >
                          <div className="comments-area" id="comments">
                            <h2 className="comments-title" style={{ paddingBottom: "10px" }}>{blogDetail.comments ? blogDetail.comments.length : 0} Comments</h2>
                            {comments.map((comment) => (
                              <Comment
                                key={comment.id}
                                commentData={comment}
                                updateScore={updateScore}
                                updateReplies={updateReplies}
                                editComment={editComment}
                                commentDelete={commentDelete}
                                setDeleteModalState={setDeleteModalState}
                              />
                            ))}
                            <AddComment buttonValue={"send"} addComments={addComments}/>
                            <div className="clearfix m-b20">
                              <div className="comment-respond-bottom" id="respond" style={{ display: "none" }}>
                                <h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{ "display": "none" }} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h4>
                                <form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                  <p className="comment-form-author">
                                    <label for="author">Name <span className="required">*</span></label>
                                    <input type="text" value="Author" name="Author" placeholder="Author" id="author" />
                                  </p>
                                  <p className="comment-form-email">
                                    <label for="email">Email <span className="required">*</span></label>
                                    <input type="text" value="email" placeholder="Email" name="email" id="email" />
                                  </p>
                                  <p className="comment-form-url">
                                    <label for="url">Website</label>
                                    <input type="text" value="url" placeholder="Website" name="url" id="url" />
                                  </p>
                                  <p className="comment-form-comment">
                                    <label for="comment">Comment</label>
                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                  </p>
                                  <p className="form-submit">
                                    <input type="submit" value="Post Comment" className="submit site-button btn-green button-comment" id="submit" name="submit" />
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
export default BlogDetails;
