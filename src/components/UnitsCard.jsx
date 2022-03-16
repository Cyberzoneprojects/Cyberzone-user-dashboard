import React from 'react';
import { FaStar, FaRegClock, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

function UnitsCard(props){
    return(
        <>
           <div className="card">
                 <img className="card_image" src={props.image} />
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div style={{marginTop: "1.3rem"}} className="card_info">
                         <div className="time">
                             <FaRegClock size='1rem' style={{marginTop: ".2rem"}} color='#0b426a'/>
                             <div><p className='time_passed'>Temps passé : 00:00:00</p></div>
                         </div>
                         <div style={{marginTop: "-.3rem"}} className='score'>
                             <FaStar style={{paddingTop: ".2rem"}} size='1.1rem' color='#0b426a'/>
                             <div className='score1'><p className='rating'>Score : 0%</p></div>
                         </div>
                     </div>
                    
<<<<<<< HEAD
                         <div className='units_buttons' style={{marginTop: "2rem"}}>
=======
                         <div className='units_buttons' style={{marginTop: "3rem"}}>
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
                            <Link to={props.module_page} style={{textDecoration: "none", marginRight: ".3rem"}}>
                                 <Button>Button</Button>{' '}
                            </Link>
                            <Link to={props.module_page} style={{textDecoration: "none"}}>
                                 <Button >Button</Button>{' '}
                            </Link>
                         </div>
                  
                 </div>
           </div>
        </>
    );
}


export default UnitsCard;








