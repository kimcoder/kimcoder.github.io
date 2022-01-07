import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/overview');
  }, []);

  return <div>HOME</div>;
};

export default Home;

Home.displayName = 'Home';
