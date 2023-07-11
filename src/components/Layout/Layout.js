import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";

import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import SidebarDashboard from "../SidebarDashboard";
import ModalVideo from "../ModalVideo";
import ModalApplication from "../ModalApplication";
import ModalSignIn from "../ModalSignIn";
import ModalApply from "../ModalApply";
import ModalAdvanced from "../ModalAdvanced";
import ModalCoverLetter from "../ModalCoverLetter";
import ModalCandidateCoverLetter from "../ModalCandidateCoverLetter";
import ModalSignUp from "../ModalSignUp";
import ModalSignCandidate from "../ModalSignCandidate";
import ModalSignEmployer from "../ModalSignEmployer";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/favicon.png";

import "../../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../../assets/fonts/icon-font/fonts/avasta.ttf";
import "../../assets/fonts/icon-font/css/style.css";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/aos/dist/aos.css";

import "../../assets/fonts/icon-font/css/style.css";
import "../../assets/fonts/fontawesome-5/css/all.css";

import "../../scss/bootstrap.scss";
import "../../scss/main.scss";
import "../../pages/main.css";
// import { IntlProvider, addLocaleData } from 'react-intl'

// Locale data
// import enData from 'react-intl/locale-data/en'
// import vnData from 'react-intl/locale-data/vi'

// Messages
// import en from '../../i18n/en.json'
// import vn from '../../i18n/vn.json'

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

// const messages = { en, pt }
// addLocaleData([...enData, ...ptData])
const Layout = ({ children, pageContext }) => {

  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useLayoutEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Puzzle</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
              {children}
            {/* </IntlProvider> */}
          </div>

          <ModalVideo />
          <ModalApplication applicantId={gContext.applicantId} jobPostId={gContext.jobPostId}/>
          <ModalSignIn />
          <ModalApply jobPostId={gContext.jobPostId} jobPostName={gContext.jobPostName}/>
          <ModalAdvanced jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCoverLetter jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCandidateCoverLetter jobPostId={gContext.jobPostId}/>
          <ModalSignCandidate />
          <ModalSignEmployer />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }

  if (pageContext.layout === "dashboard") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Puzzle</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <Header isDark={gContext.headerDark} />
            <SidebarDashboard />
            {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
              {children}
            {/* </IntlProvider> */}
          </div>

          <ModalVideo />
          <ModalApplication applicantId={gContext.applicantId} jobPostId={gContext.jobPostId} />
          <ModalSignIn />
          <ModalApply jobPostId={gContext.jobPostId} jobPostName={gContext.jobPostName}/>
          <ModalAdvanced jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCoverLetter jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCandidateCoverLetter jobPostId={gContext.jobPostId}/>
          <ModalSignCandidate />
          <ModalSignEmployer />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Puzzle</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header isDark={gContext.headerDark} />
            {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
              {children}
            {/* </IntlProvider> */}

            <Footer isDark={gContext.footerDark} />
          </div>

          <ModalVideo />
          <ModalApplication applicantId={gContext.applicantId} jobPostId={gContext.jobPostId} />
          <ModalSignIn />
          <ModalApply jobPostId={gContext.jobPostId} jobPostName={gContext.jobPostName}/>
          <ModalAdvanced jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCoverLetter jobPostId={gContext.jobPostId} candidateId={gContext.candidateId}/>
          <ModalCandidateCoverLetter jobPostId={gContext.jobPostId}/>
          <ModalSignCandidate />
          <ModalSignEmployer />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
