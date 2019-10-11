import Head from 'next/head';
import { Grid, Container } from 'semantic-ui-react';

import Header from './Header';
import HeadContent from './HeadContent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, far);

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
        />
        <title>ReactReserve</title>
      </Head>
      <Header user={user} />
      <Container
        fluid
        style={{
          paddingTop: '1em',
          paddingLeft: '7em',
          paddingRight: '7em',
          paddingBottom: '7em'
        }}
      >
        {children}
      </Container>
    </>
  );
}

export default Layout;
