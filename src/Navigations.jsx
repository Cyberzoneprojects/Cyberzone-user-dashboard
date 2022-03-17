import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import MyProfile from './pages/MyProfile'
import ResourcePage from './pages/ResourcesPage'
import AttestationPage from './pages/AttestationPage'
import Module1Page from './pages/Module1Page'
import Module2Page from './pages/Module2Page'
import Module3Page from './pages/Module3Page'
import Module4Page from './pages/Module4Page'
import LegalNoticePage from './pages/LegalNoticePage'
import UnitHome from './unitsDashboard/pages/UnitHome'
import TechnologiesPage from './unitsDashboard/pages/TechnologiesPage'
import IntroductionPage from './unitsDashboard/pages/IntroductionPage'
import Tespage from './unitsDashboard/pages/Tespage'
import CyberSpacesPage from './unitsDashboard/pages/CyberSpacesPage'
import PlayerExample from './unitsDashboard/components/VideoCard';
function Navigation (){
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/' exact element={<HomePage/>}/>
                 <Route path='/profile' exact element={<MyProfile/>}/>
                 <Route path='/res' exact element={<ResourcePage/>}/>
                 <Route path='/attest' exact element={<AttestationPage/>}/>
                 <Route path='/module1' exact element={<Module1Page/>}/>
                 <Route path='/module2' exact element={<Module2Page/>}/>
                 <Route path='/module3' exact element={<Module3Page/>}/>
                 <Route path='/module4' exact element={<Module4Page/>}/>
                 <Route path='/legalnotice' exact element={<LegalNoticePage />}/>
                 <Route path='/unite' exact element={<UnitHome />}/>
                 <Route path='/technologies' exact element={<TechnologiesPage />}/>
                 {/* <Route path='/unit-home' exact element={<Tespage />}/> */}
                 <Route path='/introduction' exact element={<IntroductionPage />}/>
                 <Route path='/cyberspace' exact element={<CyberSpacesPage />}/>
                 <Route path='/video' exact element={<PlayerExample />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;