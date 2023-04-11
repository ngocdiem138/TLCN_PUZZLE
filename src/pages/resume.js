import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Content from '@/components';
import PageWrapper from '../components/PageWrapper/PageWrapper';
// import EN_US_LOCALE from '@/i18n/locales/en-US.json';
import { getLanguage, registerLocale, getLocale } from '@/i18n';
import './index.less';
// import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

// registerLocale('en-US', EN_US_LOCALE);

const Resume = ({ intl }) => {
  const [title, changeTitle] = useState('Resume Generator');
  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.user) {
      changeTitle(`${query.user}'s resume`);
    }
  }, []);

  const lang = 'en';
  return (
    <PageWrapper>
      <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
        <div className="container">
          <div className="row">
            <Helmet>
              <title>{title}</title>
            </Helmet>
            {/* <Header /> */}
            <Content />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
