import React, { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing1/Content2";
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { I18nextProvider } from 'react-i18next'
import i18n from '../../src/i18n';
// import 'simplebar/dist/simplebar.min.css'
// import '../styles/index.css'
// import '../index.css'

const IndexPage = () => {
  const isSSR = typeof window === "undefined";
  return (
    <><I18nextProvider i18n={i18n}>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <FeaturedJobs />
        <Categories />
        <Brands />
        <Content1 />
        <Content2 />
      </PageWrapper>
      </I18nextProvider>
    </>
  );
};
export default IndexPage;

// export const query = graphql`
//   query ($language: String!) {
//     i18n: allLocale(
//       filter: { ns: { in: ["index"] }, language: { eq: $language } }
//     ) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
