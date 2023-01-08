import React from 'react'
import Logo from '../Assets/logo1.png'
import {FaGraduationCap} from 'react-icons/fa'
import {FiArrowRight} from 'react-icons/fi'
const Header = () => {
  return (
    <>
    <div style={{width:"100%"}}>
    <center>
        <div className='container-fluid' style={{backgroundColor:"rgba(255,255,255,.2)",paddingBottom:"100px",width:"100%",display:"grid",gridTemplateColumns:"auto auto auto"}}>
        <div className='' style={{width:"100%",marginLeft:"1%",marginTop:"100px"}}>
        <img src={Logo} style={{maxWidth:"750px",width:"750px"}}></img>
        </div>
        <div className=' bg-white' style={{width:"10px",marginLeft:"5%",height:"300px",marginTop:"150px"}}></div>
        <div style={{maxWidth:"700px",marginLeft:"-100px",marginTop:"180px",fontSize:"50px"}}>
        <div className=' text-white'>Attend & Host Your Quizes</div>
        <div>
        <button className='mt-5 h1 text-white' style={{width:"350px",height:"90px",fontSize:"30px",borderRadius:"50px",borderStyle:"hidden",background:"#D76F30"}}>Let's Go<FiArrowRight className='ms-4 mb-2'/></button>
        </div>
        </div>
        </div>
        </center>
        </div>
    </>
  )
}

export default Header