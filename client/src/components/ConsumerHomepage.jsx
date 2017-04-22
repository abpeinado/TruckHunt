import React from 'react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';
// import OwnerSignup from './OwnerSignup.jsx';
// import TruckInfo from './TruckInfo.jsx';

const landingPage = () => {
  return (
    <div>
      <Header />
      <MainMap />
      <TruckList />
    </div>
  );
};

export default landingPage;
