import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../../CommonPageContents/ModulesPageContent';
import SelectServices from '../components/SelectService';

function HomePage() {
  return (
    <>
       <Sidebar/>
       <SelectServices/>
       <main>
         <HomeContent display="clients"/>
       </main>
    </>
  );
}

export default HomePage;
