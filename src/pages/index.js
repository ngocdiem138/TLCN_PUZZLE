import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing1/Content2";
import { I18nextProvider } from 'react-i18next'
import i18n from '../../src/i18n';
const IndexPage = () => {
  const isSSR = typeof window === "undefined"
  return (
    <><I18nextProvider i18n={i18n}>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <FeaturedJobs />
        {/* <Categories />
        <Content1 />
        <Content2 /> */}
        <Brands />
      </PageWrapper>
    </I18nextProvider>
    </>
  );
};
export default IndexPage;
