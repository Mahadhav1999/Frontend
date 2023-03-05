import React from 'react';
import LandingPage from './LandingPage';
import RecentStories from './RecentStories';

const Home = () => {
  return (
    <div className="p-3">
        <LandingPage/>
        <RecentStories/>
    </div>
  )
}

export default Home;