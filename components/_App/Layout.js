import Head from 'next/head';
import { Grid, Container } from 'semantic-ui-react';

import Header from './Header';
import HeadContent from './HeadContent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

library.add(fas, fab, far);

const Boxer = styled.div`
  width: auto !important;
  margin-left: 1em !important;
  margin-right: 1em !important;
  padding-left: 7em;
  padding-right: 7em;
  padding-bottom: 7em;
  margin-top: 75px;

  @media (max-width: 767px) {
    padding: 0 1em 7em 1em !important;
  }
`;

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
        />
        <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        <title>eCommerce</title>
      </Head>
      <Header user={user} />
      <Boxer>{children}</Boxer>
    </>
  );
}

export default Layout;
