import React, { useState } from "react";
// import BackgroundVideo  from "./cyberzone.mp4";
import { useEffect } from "react";
import "../../AdminDashboard/admin.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { API } from "../../config";
import { useNavigate } from "react-router-dom";


function ClientRegisterContent(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({first_name:"", last_name:"", gender: "", country:"", email:"", password:"", phone_number:""})
    const [errorMessages, setErrorMessages] = useState({first_name:"", last_name:"", gender: "", country:"", email:"", password:"", phone_number:""})
    
    const handleChange = event => {
        setInputs(inputs=>{return{...inputs, [event.target.name]: event.target.value}})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(inputs)
        if(inputs.first_name && inputs.email && inputs.last_name && inputs.phone_number && inputs.password){
            axios.post(`${API}/user/register`, inputs)
            .then((response)=>{
                // console.log(response)
                const status = response.data.status
                if(status === "success"){
                    navigate("/userlogin")
                }
            }).catch((err)=>{
                console.log(err)
                const msg = err.response.data.msg
                setErrorMessages(msg)
            })
        }

    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
             <main className="login" style={{background:"white"}}>
                 <video autoPlay loop muted width="1350">
                 {/* <source src={BackgroundVideo} type="video/mp4"/> */}
                 </video>
                 <div className="LoginCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div data-aos="zoom-out-right" data-aos-offset="100" className="portlet-title">
                                    <p className="text-center Login-name">Create Account</p>
                                </div>
                                {/* ===== form ======= */}
                                <form onSubmit={handleSubmit} data-aos="zoom-out-right" data-aos-offset="100" >
                                    <div className="form-group">
                                        <label htmlFor="first_name" style={{marginBottom: "-12px"}} className="FormLable"><p>First Name</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.first_name} onChange={handleChange} className="form-control" type="text" name="first_name" placeholder="Enter First Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" style={{marginBottom: "-12px"}} className="FormLable"><p>Last Name</p></label>
                                        <input style={{height:'2.5rem'}}value={inputs.last_name} onChange={handleChange} className="form-control" type="text" name="last_name" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender" style={{marginBottom: "-12px"}} className="FormLable"><p>Gender</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.gender} onChange={handleChange} className="form-control" type="text" name="gender" placeholder="Select your Gender" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country" style={{marginBottom: "-12px"}} className="FormLable"><p>Country</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.country} onChange={handleChange} className="form-control" type="text" name="country" placeholder="Select your Country" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone_number" style={{marginBottom: "-12px"}} className="FormLable"><p>Phone Number</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.phone_number} onChange={handleChange} className="form-control" type="number" name="phone_number" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{marginBottom: "-12px"}} className="FormLable"><p>Email</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.email} onChange={handleChange} className="form-control" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group" style={{marginTop: '13px'}}>
                                        <label htmlFor="password" style={{marginBottom: "-12px"}} className="FormLable"><p>Password</p></label>
                                        <input style={{height:'2.5rem'}} value={inputs.password} onChange={handleChange} className="form-control" type="password" placeholder="Password" name="password" />
                                    </div>
                                    <div style={{marginTop: '1.3rem'}} className="form-group">
                                        <button type="submit" data-aos="zoom-out-right" style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} className="btn waves-effect waves-light submitBtn">SIGN UP</button>
                                    </div>
                                </form>
                                <div className="row" style={{marginTop:"-.5rem"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100"><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div data-aos="zoom-out-right" data-aos-offset="100" style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OR</button></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-2 mb-4" style={{marginTop:"-.5rem"}}>
                                    <div data-aos="zoom-out-right" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <p style={{fontSize:".9rem", marginTop:"-.6rem"}}>Already have an Account? <span style={{color:"#4ab2cc"}}><a style={{color:"#4ab2cc"}} href="/userlogin">Login</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </main>
        </>
    )
}

export default ClientRegisterContent;