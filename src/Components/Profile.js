import React from 'react'
import img from '../Assets/logo.png'
import {VscBook} from 'react-icons/vsc'
import {SiLinkedin} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import Navbar from './Navbar'

const Rankup = () => {
  const [uname,setUname]  = React.useState('Gnana Sai Sree')
  const [email,setEmail]  = React.useState('alicebob@gmail.com')
  const [fname,setFname]  = React.useState('Gnana Sai Sree')
  const [lname,setLname]  = React.useState('Gnana Sai Sree')
  const [edu,setEdu]  = React.useState('BTech')
  const [inter,setInter] = React.useState('Web Technologies, Coding')
  const [lang,setLang] = React.useState('English, Hindi')
  const [lnkin,setLnkin]  = React.useState('Gnana Sai Sree')
  const [git,setGit]  = React.useState('Gnana Sai Sree')
  const [rank,setRank]=React.useState('12345')
  const [naq,setNaq]=React.useState('0')


  // background:'linear-gradient(white, #829460)',backgroundColor:'#285430'
  return (
    <>
    <Navbar/>
    <div className='container shadow shadow-lg mt-3 p-5 text-white' style={{width:1200,borderRadius:50,backgroundColor:"rgba(255,255,255,.2)"}}>
      <div className=' mt-2 mb-4 ps-5' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div className=' p-2 image' style={{overflow:'hidden'}}>
            <p className='h5 float-end' style={{fontFamily:'Cursive'}}><b>Rank &nbsp;</b><span className="badge bg-success rounded-pill p-2" style={{width:80,height:30}}><b>{rank}</b></span></p>
            <img src={img} alt="Profile" className='rounded-pill border border-white float-end' style={{width:250,height:250,transition:'all 1.5s ease',}}></img> 
        </div>

        <div className='mt-5' style={{width:500}}> 
        <p className='mt-4 pt-4 h1 float-start' style={{fontFamily:'Cursive'}}><b>{uname}</b></p>
        <p className='mt-3 h2 float-start' style={{fontFamily:'Cursive'}}><b>{email}</b></p> 
        </div>
      </div>
 

      <div className='mt-2 mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div  style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><strong>First Name &nbsp; :</strong></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{fname}</h3>
        </div>
      </div>


      <div className='mb-2 ' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><b>Last Name &nbsp; :</b></h3>
        </div>

        <div  style={{width:580}}>
          <h3 className='mb-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{lname}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><VscBook/>&nbsp;&nbsp;<b>Education &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{edu}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><b>Interests &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{inter}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><b>Languages &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{lang}</h3>
        </div>
      </div>

      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><b>Quizes attempted &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <p className='mt-2 h3 float-start ps-3' href='/' style={{fontFamily:'Cursive'}}>{naq}</p>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><SiLinkedin className='pb-1'/>&nbsp;&nbsp;<b>LinkedIn &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <a className='mt-2 h3 float-start ps-3 text-white text-decoration-none' href='/' style={{fontFamily:'Cursive'}}>{lnkin}</a>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><AiFillGithub className='pb-1' />&nbsp;&nbsp;<b>GitHub &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <a className='mt-2 h3 float-start ps-3 text-white text-decoration-none' href='/' style={{fontFamily:'Cursive'}}>{git}</a>
        </div>
      </div>

      <div>

</div>


    </div>
    </>
  ) 
}

export default Rankup 

// 490 800

