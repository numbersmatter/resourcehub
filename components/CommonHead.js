import React, {useEffect, Fragment} from 'react'
import Head from 'next/head';
import { register, unregister } from 'next-offline/runtime';

const CommonHead = () => {
  useEffect(()=> {
      register('/service-worker.js', {scope: '/'}) 
      return () => {
          unregister();  
      };
  }, [])
  return (
    <Head>
    <title>Resource Hub</title>
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#4285f4" />
    <meta name = "apple-mobile-web-app-capable" content="yes" />
    <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
    <meta name = "apple-mobile-web-app-title" content="Resource Hub" />
    <link rel="apple-touch-icon" href="/static/logo-icon-144x144.png" />
    <link rel="apple-touch-startup-icon" href="/static/logo-icon-144x144.png" />
  </Head>
    )
}

export default CommonHead