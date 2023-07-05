import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Container, Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "gatsby";

import { useWindowSize } from "../../hooks/useWindowSize";
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
// import { menuItems } from "./menuItems";
import { logout } from "../../actions/auth-actions";

import imgP from "../../assets/image/header-profile.png";

import { useTranslation } from 'react-i18next';
import { UserServiceIml } from "../../actions/user-actions";

const SiteHeader = styled.header`
  .dropdown-toggle::after {
    opacity: 0;
  }

  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) =>
    dark ? theme.colors.heading : theme.colors.light};
    }
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
  border-color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
`;

const Header = () => {
  // const { languages, originalPath, t, i18n } = useI18next();

  const { t, i18n } = useTranslation()



  const [isEmployer, setIsEmployer] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [avatar, setAvatar] = useState("");
  let langDefault = undefined;

  const [lang, setLang] = useState("en");
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    setIsCandidate(localStorage.getItem("userRole") == "CANDIDATE");
    setIsEmployer(localStorage.getItem("userRole") == "EMPLOYER");
    setIsUser(localStorage.getItem("userRole") == "USER");
  })
  useEffect(() => {
    langDefault = localStorage.getItem("lang");
    if (langDefault) { i18n.changeLanguage(langDefault); setLang(langDefault) };
    // if (isLoggedIn) {
    UserServiceIml.getUserProfile().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        // setShowError403(true);
      } else {
        setAvatar(response.data.data.avatar);
      }
    });
    // }
  }, [])
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang)
    localStorage.setItem("lang", lang)
  }




  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);


  const size = useWindowSize();

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });


  const handleSignUp = () => {
    if (isLoggedIn) {
      logout();
      console.log("a");
    } else {
      gContext.toggleSignUpModal();
    }
  }

  const handleSignIn = () => {
    if (isLoggedIn) {
      if (typeof window !== "undefined") {
        if (isCandidate) {
          window.location.href = "/dashboard-settings";
        } else if (isEmployer) {
          window.location.href = "/dashboard-main";
        } else if (isUser) {
          window.location.href = "/dashboard-settings";
        }
        else {
          window.location.href = "/";
        }
      }
    } else {
      gContext.toggleSignInModal();
    }
  }

  const menuItems = [

    { name: "", label: t("header.home") },

    { name: "search-grid", label: t("header.jobGrid") },
    {
      name: "blog-grid",
      label: t("header.blog"),
      isExternal: true,
    },
    { name: "managecv", label: t("header.cv") },
  ];

  return (
    <>
      {/* <h1>{t('topPage.greeting')}</h1>
      <ul>
        <li><button onClick={() => changeLang('en')}>EN</button></li>
        <li><button onClick={() => changeLang('vi')}>VI</button></li>
      </ul> */}
      <SiteHeader
        className={`site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ${gContext.header.bgClass
          } ${gContext.header.align === "left"
            ? "site-header--menu-left "
            : gContext.header.align === "right"
              ? "site-header--menu-right "
              : "site-header--menu-center "
          }
        ${gContext.header.theme === "dark" ? "dark-mode-texts" : " "} ${showScrolling ? "scrolling" : ""
          } ${gContext.header.reveal &&
            showReveal &&
            gContext.header.theme === "dark"
            ? "reveal-header bg-blackish-blue"
            : gContext.header.reveal && showReveal
              ? "reveal-header"
              : ""
          }`}
      >
        <Container
          fluid={gContext.header.isFluid}
          className={gContext.header.isFluid ? "pr-lg-9 pl-lg-9" : ""}
        >
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo white={gContext.header.theme === "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu d-none d-lg-flex">
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items);
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            <li className="nav-item dropdown" {...rest}>
                              <a
                                className="nav-link dropdown-toggle gr-toggle-arrow"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/#"
                                onClick={(e) => e.preventDefault()}
                              >
                                {label}
                                <i className="icon icon-small-down"></i>
                              </a>
                              <ul className="gr-menu-dropdown dropdown-menu ">
                                {items.map((subItem, indexSub) => {
                                  const hasInnerSubItems = Array.isArray(
                                    subItem.items
                                  );
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      {hasInnerSubItems ? (
                                        <li className="drop-menu-item dropdown">
                                          <a
                                            className="dropdown-toggle gr-toggle-arrow"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            href="/#"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {subItem.label}
                                            <i className="icon icon-small-down"></i>
                                          </a>
                                          <ul className="gr-menu-dropdown dropdown-menu dropdown-left">
                                            {subItem.items.map(
                                              (itemInner, indexInnerMost) => (
                                                <li
                                                  className="drop-menu-item"
                                                  key={
                                                    itemInner.name +
                                                    indexInnerMost
                                                  }
                                                >
                                                  {itemInner.isExternal ? (
                                                    <a
                                                      href={`${itemInner.name}`}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {itemInner.label}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      to={`/${itemInner.name}`}
                                                    >
                                                      {itemInner.label}
                                                    </Link>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      ) : (
                                        <li className="drop-menu-item">
                                          {subItem.isExternal ? (
                                            <a
                                              href={`${subItem.name}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {subItem.label}
                                            </a>
                                          ) : (
                                            <Link to={`/${subItem.name}`}>
                                              {subItem.label}
                                            </Link>
                                          )}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </ul>
                            </li>
                          ) : (
                            <li className="nav-item" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link
                                  className="nav-link"
                                  to={`/${name}`}
                                  role="button"
                                  aria-expanded="false"
                                >
                                  {label}
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>

            {gContext.header.button === "cta" && (
              <div className="header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block">
                <Link to="/#" className={`btn btn-${gContext.header.variant}`}>
                  {gContext.header.buttonText}
                </Link>
              </div>
            )}

            {gContext.header.button === "profile" && (
              <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
                <div>
                  <Link
                    to="/#"
                    className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative"
                  >
                    <i className="fas fa-bell heading-default-color"></i>
                    <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">
                      3
                    </span>
                  </Link>
                </div>
                <div>
                  <Dropdown className="show-gr-dropdown py-5">
                    <Dropdown.Toggle
                      as="a"
                      className="proile media ml-7 flex-y-center"
                    >
                      <div className="circle-40">
                        <img src={avatar ? avatar : imgP} alt="" referrerpolicy="no-referrer" style={{borderRadius: "50%"}}/>
                      </div>
                      <i className="fas fa-chevron-down heading-default-color ml-6"></i>
                    </Dropdown.Toggle>
                    {size.width <= 991 ? (
                      <Dropdown.Menu
                        className="gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default"
                        key="1"
                      >
                        <Link
                          to="/#"
                          className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                        >
                          {t('header.setting')}
                        </Link>
                        <Link
                          to="/#"
                          className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                        >
                          {t('header.edit')}

                        </Link>
                        <a
                          className={`dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase`}
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          {t('header.logout')}
                        </a>
                      </Dropdown.Menu>
                    ) : (
                      <div
                        className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default"
                        key="2"
                      >
                        <Link
                          to="/#"
                          className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                        >
                          {t('header.setting')}
                        </Link>
                        <Link
                          to="/#"
                          className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                        >
                          {t('header.edit')}
                        </Link>
                        <a
                          className={`dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase`}
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          {t('header.logout')}
                        </a>
                      </div>
                    )}
                  </Dropdown>
                </div>
              </div>
            )}

            {gContext.header.button === "account" && (
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
                <a
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignIn();
                  }}
                >
                  {isLoggedIn ? t('header.myAccount') : t('header.login')}
                </a>
                {isUser ? <Link
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  to={'/register'}
                >
                  {t('header.updateAccount')}
                </Link> : null}
                {isCandidate ? <Link
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  to={'/candidate-profile-2'}
                >
                  {t('header.myJob')}
                </Link> : null}
                {isLoggedIn ? <Link
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  to={'/pricing'}
                >
                  {t('header.upgradeAccount')}
                </Link> : null}
                <a
                  className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignUp();
                  }}
                >
                  {isLoggedIn ? t('header.logout') : t('header.signup')}
                </a>
                <a
                  className="btn btn-transparent text-uppercase font-size-4 heading-default-color"
                  // href="/#"
                  onClick={() => changeLang('en')}
                  style={lang == 'en' || lang == undefined ? { color: "green", minWidth: "30px" } : { color: "gray", minWidth: "10px" }}
                >
                  EN
                </a>
                <a
                  className="btn btn-transparent text-uppercase font-size-4 heading-default-color"
                  // href="/#"
                  onClick={() => changeLang('vi')}
                  style={lang == 'vi' ? { color: "green", minWidth: "30px" } : { color: "gray", minWidth: "10px" }}
                >
                  VI
                </a>
              </div>
            )}

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${gContext.visibleOffCanvas ? "collapsed" : ""
                }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.header.theme === "dark" ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};
export default Header;
