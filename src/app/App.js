import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing1/Content2";
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const IndexPage = () => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <FeaturedJobs />
        <Content2 />
      </PageWrapper>
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
