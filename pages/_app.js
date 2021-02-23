import NavBar from '../components/NavBar';
import '../styles/globals.css';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import CommonHead from '../components/CommonHead';


function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <div>
    <CommonHead />

    <UserContext.Provider value={userData}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster /> 
      <link rel="manifest" href="/manifest.json"></link>
    </UserContext.Provider>
    </div>
  )
}

export default MyApp
