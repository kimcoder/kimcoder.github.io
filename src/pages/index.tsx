import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/overview');
  }, []);

  return <div />;
};

export default Home;

Home.displayName = 'Home';
