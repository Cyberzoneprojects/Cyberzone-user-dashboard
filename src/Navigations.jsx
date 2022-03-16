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
<<<<<<< HEAD
import IntroductionPage from './unitsDashboard/pages/IntroductionPage'
=======
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
import Tespage from './unitsDashboard/pages/Tespage'
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
                 <Route path='/unit-home' exact element={<Tespage />}/>
<<<<<<< HEAD
                 <Route path='/introduction' exact element={<IntroductionPage />}/>
=======
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
                 
                
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;