import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false);
  const [showSidebarDashboard, setShowSidebarDashboard] = useState(true);
  const [applicationModalVisible, setApplicationModalVisible] = useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [applyModalVisible, setApplyModalVisible] = useState(false);
  const [advancedModalVisible, setAdvancedModalVisible] = useState(false);
  const [coverLetterModalVisible, setCoverLetterModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [applicantId, setApplicantId] = useState(0);
  const [jobPostId, setJobPostId] = useState(0);
  const [candidateId, setCandidateId] = useState(0);
  const [jobPostName, setJobPostName] = useState("");
  const [header, setHeader] = useState({
    theme: "light",
    bgClass: "default",
    variant: "primary",
    align: "left",
    isFluid: false,
    button: "cta", // profile, account, null
    buttonText: "Get started free", // profile, account, null
    reveal: true,
  });
  const [footer, setFooter] = useState({
    theme: "dark",
    style: "style1", //style1, style2
  });

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleSidebarDashboard = () => {
    setShowSidebarDashboard(!showSidebarDashboard);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleApplicationModal = () => {
    setApplicationModalVisible(!applicationModalVisible);
  };

  const setToggleApplicantId = (id) => {
    setApplicantId(id);
  };

  const setToggleJobPostId = (id) => {
    setJobPostId (id);
  };

  const setToggleCandidateId = (id) => {
    setCandidateId(id);
  };

  const setToggleJobPostName = (name) => {
    setJobPostName (name);
  };

  const toggleSignInModal = () => {
    setSignInModalVisible(!signInModalVisible);
  };

  const toggleSignInModalClose = () => {
    setSignInModalVisible(false);
  };

  const toggleApplyModal = () => {
    setApplyModalVisible(!applyModalVisible);
  };

  const toggleAdvancedModal = () => {
    setAdvancedModalVisible(!advancedModalVisible);
  };

  const toggleCoverLetterModal = () => {
    setCoverLetterModalVisible(!coverLetterModalVisible);
  };

  const toggleApplyModalClose = () => {
    setApplyModalVisible(false);
  };

  const toggleAdvancedModalClose = () => {
    setAdvancedModalVisible(false);
  };

  const toggleCoverLetterModalClose = () => {
    setCoverLetterModalVisible(false);
  };


  const toggleSignUpModal = () => {
    setSignUpModalVisible(!signUpModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        showSidebarDashboard,
        toggleSidebarDashboard,
        videoModalVisible,
        toggleVideoModal,
        applicationModalVisible,
        toggleApplicationModal,
        setToggleApplicantId,
        setToggleJobPostId,
        setToggleJobPostName,
        setToggleCandidateId,
        signInModalVisible,
        toggleSignInModal,
        toggleSignInModalClose,
        applyModalVisible,
        toggleApplyModal,
        toggleApplyModalClose,
        advancedModalVisible,
        toggleAdvancedModal,
        toggleAdvancedModalClose,
        coverLetterModalVisible,
        toggleCoverLetterModal,
        toggleCoverLetterModalClose,
        signUpModalVisible,
        toggleSignUpModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
        header,
        setHeader,
        footer,
        setFooter,
        applicantId,
        setApplicantId,
        candidateId,
        setCandidateId,
        jobPostId,
        jobPostName,
        setJobPostId,
        setJobPostName
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
