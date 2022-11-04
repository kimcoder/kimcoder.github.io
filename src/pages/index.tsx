import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/overview');
  }, []);

  return <div />;
};

export default Home;

Home.displayName = 'Home';
