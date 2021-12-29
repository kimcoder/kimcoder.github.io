import * as React from 'react';

const Home = () => {
  return <></>;
};

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/overview',
      permanent: true,
    },
  };
}

export default Home;

Home.displayName = 'Home';
