import React,{ useEffect, useState }  from "react";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { Container } from '@chakra-ui/layout';
import Content from '../components/Content/Content';


const defaultTypes = [
  { value: "b2b", label: "B2B" },
  { value: "saas", label: "SAAS" },
  { value: "b2b", label: "b2b" },
];

const defaultEmployees = [
  { value: "10-50", label: "10-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-500", label: "100-500" },
  { value: "500-2000", label: "500-2000" },
];

const defaultLocations = [
  { value: "bd", label: "Bangladesh" },
  { value: "sp", label: "Singapore" },
  { value: "tl", label: "Thailand" },
  { value: "de", label: "Germany" },
];

const DashboardSettings = () => {
  const [tabs, setTabs] = useState(['Account Settings']);
  useEffect(() => {
    if (localStorage.getItem("userRole") == "EMPLOYER") {
      setTabs(['Account Settings', 'Employer Settings'])
    } else if (localStorage.getItem("userRole") == "CANDIDATE") {
      setTabs(['Account Settings', 'Candidate Settings'])
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
                    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" style={{"margin-top":"10%"}}>
                      <Content tabs={tabs}  isEmployer = {localStorage.getItem("userRole") == "EMPLOYER"} isCandidate ={localStorage.getItem("userRole") == "CANDIDATE"}/>
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
