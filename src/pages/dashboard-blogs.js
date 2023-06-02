import React, { useContext, useEffect, useState } from "react";
import pic1 from "../assets/image/banner/pic1.jpg";
import PageWrapper from "../components/PageWrapper";
import './main.css';
import { UserServiceIml } from "../actions/user-actions";
import { Link } from "gatsby";
const DashboardBlogs = () => {
  const [profile, setProfile] = useState({
    phone: "",
    fullName: "",
    avatar: "",
    email: "",
    username: "",
    locale: ""
  });
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState("")
  const [showError, setShowError] = useState(false)
  const [showError403, setShowError403] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  useEffect(() => {
    UserServiceIml.getUserProfile().then((response) => {
      if (response.data.errCode == "403") {
        setShowError403(true);
      } else {
        setFullName(response.data.data.fullName);
        setUsername(response.data.data.username);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);
        setAvatar(response.data.data.avatar);
      }
    });
  }, [])
  return <>
    <PageWrapper headerConfig={{
      button: "profile",
      isFluid: true,
      bgClass: "bg-default",
      reveal: false,
    }}
    >
      <div className="dashboard-main-container mt-25 mt-lg-31">
        <div className="container">
          <div id="__next">
            <main className="main">
              <div className="banner banner-home4 bg-gray-850">
                <div className="container">
                  <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12">
                      <div className="pt-20">
                        <div className="box-banner-4">
                          <div className="banner-image">
                            <img
                              src={pic1}
                              alt="Genz"
                            />
                          </div>
                          <div className="banner-info">
                            <span className="text-sm-bold color-gray-600">
                              Hello Everyone!
                            </span>
                            <h3 className="color-linear d-inline-block mt-10 mb-15">
                              I'm {profile.fullName ? profile.fullName : "Full name not update"}, a lover of technology, business and
                              experiencing new things
                            </h3>
                            <div className="box-socials">
                              <a className="bg-gray-800 hover-up" href="/page-author#">
                                <span className="fb" />
                              </a>
                              <a className="bg-gray-800 hover-up" href="/page-author#">
                                <span className="inst" />
                              </a>
                              <a className="bg-gray-800 hover-up" href="/page-author#">
                                <span className="snap" />
                              </a>
                              <a className="bg-gray-800 hover-up" href="/page-author#">
                                <span className="tw" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cover-home3">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="row mt-50 mb-10 mt-50">
                        <div className="col-lg-9">
                          <h2 className="color-linear d-inline-block mb-10 my-15">
                            Posted by {profile.fullName ? profile.fullName : "Full name not update"}
                          </h2>
                        </div>
                        <div className="my-15 px-11 col-lg-2">
                          <Link
                            to="/dashboard-blog?id=new"
                            className="btn btn-primary btn-xl w-100 text-uppercase"
                          >
                            <span className="mr-5 d-inline-block">+</span>Post a new blog
                          </Link>
                        </div>
                      </div>
                      <div className="row mt-50 mb-10 mt-50">
                        <div className="col-lg-10">
                          <p className="text-lg color-gray-500">Exclusive author</p>
                        </div>
                      </div>
                      <div className="row mt-50 mb-10">
                        <div className="col-lg-6">
                          <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                            <div className="card-image mb-20">
                              <a className="post-type" href="/page-author#" />
                              <a href="/single-sidebar">
                                <img
                                  src="https://genz-nextjs-v2.vercel.app/assets/imgs/page/travel-tip/news1.png"
                                  alt="Genz"
                                />
                              </a>
                            </div>
                            <div className="card-info">
                              <div className="row">
                                <div className="col-7">
                                  <a
                                    className="color-gray-700 text-sm"
                                    href="/blog-archive"
                                  >
                                    # Travel
                                  </a>
                                  <a
                                    className="color-gray-700 text-sm"
                                    href="/blog-archive"
                                  >
                                    # Lifestyle
                                  </a>
                                </div>
                                <div className="col-5 text-end">
                                  <span className="color-gray-700 text-sm timeread">
                                    3 mins read
                                  </span>
                                </div>
                              </div>
                              <a href="/single-sidebar">
                                <h4 className="color-white mt-20">
                                  Self-observation is the first step of inner
                                  unfolding
                                </h4>
                              </a>
                              <div className="row align-items-center mt-25">
                                <div className="col-7">
                                  <div className="box-author">
                                    <img
                                      src={pic1}
                                      alt="Genz"
                                    />
                                    <div className="author-info">
                                      <h6 className="color-gray-700">Joseph</h6>
                                      <span className="color-gray-700 text-sm">
                                        25 April 2022
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <a
                                    className="readmore color-gray-500 text-sm"
                                    href="/single-sidebar"
                                  >
                                    <span>Read more</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                            <div className="card-image mb-20">
                              <a className="post-type" href="/page-author#" />
                              <a href="/single-sidebar">
                                <img
                                  src="https://genz-nextjs-v2.vercel.app/assets/imgs/page/travel-tip/news1.png"
                                  alt="Genz"
                                />
                              </a>
                            </div>
                            <div className="card-info">
                              <div className="row">
                                <div className="col-7">
                                  <a
                                    className="color-gray-700 text-sm"
                                    href="/blog-archive"
                                  >
                                    # Travel
                                  </a>
                                  <a
                                    className="color-gray-700 text-sm"
                                    href="/blog-archive"
                                  >
                                    # Lifestyle
                                  </a>
                                </div>
                                <div className="col-5 text-end">
                                  <span className="color-gray-700 text-sm timeread">
                                    3 mins read
                                  </span>
                                </div>
                              </div>
                              <a href="/single-sidebar">
                                <h4 className="color-white mt-20">
                                  Your Light Is About To Stop Being Relevant
                                </h4>
                              </a>
                              <div className="row align-items-center mt-25">
                                <div className="col-7">
                                  <div className="box-author">
                                    <img
                                      src={pic1}
                                      alt="Genz"
                                    />
                                    <div className="author-info">
                                      <h6 className="color-gray-700">Joseph</h6>
                                      <span className="color-gray-700 text-sm">
                                        25 April 2022
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <a
                                    className="readmore color-gray-500 text-sm"
                                    href="/single-sidebar"
                                  >
                                    <span>Read more</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <nav className="mb-50">
                        <ul className="pagination">
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".0s"
                          >
                            <a className="page-link page-prev" href="/page-author#">
                              <i className="fi-rr-arrow-small-left" />
                            </a>
                          </li>
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".1s"
                          >
                            <a className="page-link" href="/page-author#">
                              1
                            </a>
                          </li>
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".2s"
                          >
                            <a className="page-link active" href="/page-author#">
                              2
                            </a>
                          </li>
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".3s"
                          >
                            <a className="page-link" href="/page-author#">
                              3
                            </a>
                          </li>
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".4s"
                          >
                            <a className="page-link" href="/page-author#">
                              ...
                            </a>
                          </li>
                          <li
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".5s"
                          >
                            <a className="page-link page-next" href="/page-author#">
                              <i className="fi-rr-arrow-small-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="footer">
              <div className="container">
                <div className="footer-1 bg-gray-850 border-gray-800">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                        Categories
                      </h6>
                      <div className="row">
                        <div className="col-6">
                          <ul className="menu-footer">
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Action
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Business
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Adventure
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Canada
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                America
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Curiosity
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="menu-footer">
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Animal
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Dental
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Biology
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Design
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Breakfast
                              </a>
                            </li>
                            <li className="wow animate__animated animate__fadeInUp">
                              <a className="color-gray-500" href="/blog-archive">
                                Dessert
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                        Newsletter
                      </h4>
                      <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">
                        Sign up to be first to receive the latest stories inspiring us,
                        case studies, and industry news.
                      </p>
                      <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                        <form action="#">
                          <div className="form-group">
                            <input
                              className="input-name border-gray-500"
                              type="text"
                              placeholder="Your name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="input-email border-gray-500"
                              type="email"
                              placeholder="Emaill address"
                            />
                          </div>
                          <div className="form-group mt-20">
                            <button className="btn btn-linear hover-up">
                              Subscribe
                              <i className="fi-rr-arrow-small-right" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <a
              id="scrollUp"
              href="#top"
              style={{ position: "fixed", zIndex: 2147483647 }}
            >
              <i className="fi-rr-arrow-small-up" />
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  </>
}
export default DashboardBlogs;
