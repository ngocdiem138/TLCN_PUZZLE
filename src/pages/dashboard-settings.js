import React, { useEffect, useState } from "react";

import PageWrapper from "../components/PageWrapper";
import { Container } from '@chakra-ui/layout';
import Content from '../components/Content/Content';

const DashboardSettings = () => {
  const [tabs, setTabs] = useState(['Account Settings']);
  const [isEmployer, setIsEmployer] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userRole") == "EMPLOYER") {
      setIsEmployer(true);
      setTabs(['Account Settings', 'Employer Settings']);
    } else if (localStorage.getItem("userRole") == "CANDIDATE") {
      setTabs(['Account Settings', 'Candidate Settings'])
      setIsCandidate(true);
    } else if (localStorage.getItem("userRole") == "USER") {
      setIsUser(true);
    } 
  }, [])
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          id="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    {/* Update Company Profile */}
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" style={{ "margin-top": "10%" }}>
                      <Content tabs={tabs} isEmployer={isEmployer} isCandidate={isCandidate} isUser = {isUser} />
                    </Container>
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
export default DashboardSettings;
