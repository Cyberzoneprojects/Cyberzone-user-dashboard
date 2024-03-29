import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureThreeContent from '../Admin-body-content/AddStructureThreeContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';
import { useLocation } from 'react-router-dom';
import EditAdminSidebarLinks from '../components/EditAdminSidebarLinks';

function AddStructureThreePage() {
  const location = useLocation();
  const unitId = location.state;
  return (
    <div className="">
        <EditAdminSidebarLinks unitsId={unitId.id}/>
        <AddModel unitsId={unitId.id}/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <AddStructureThreeContent/>
            </div>
        </div>
    </div>

  );
}

export default AddStructureThreePage;
