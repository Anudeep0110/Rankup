import React from 'react'
import img from '../Assets/logo.png'
import {VscBook} from 'react-icons/vsc'
import {SiLinkedin} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {HiPencilAlt} from 'react-icons/hi'
import {FaIoxhost} from 'react-icons/fa'
import {BsCardChecklist} from 'react-icons/bs'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import Profile from '../Assets/retrieve.jpg'

import Navbar from './Navbar'
import Axios  from 'axios'

const Rankup = () => {
  const [uname,setUname]  = React.useState('Gnana Sai Sree')
  const [email,setEmail]  = React.useState('alicebob@gmail.com')
  const [fname,setFname]  = React.useState('Gnana Sai Sree')
  const [lname,setLname]  = React.useState('Gnana Sai Sree')
  const [edu,setEdu]  = React.useState('BTech')
  const [inter1,setInter1] = React.useState('Web Technologies')
  const [inter2,setInter2] = React.useState('Web Technologies')
  const [join,setJoin] = React.useState('English, Hindi')
  const [lnkin,setLnkin]  = React.useState('Gnana Sai Sree')
  const [git,setGit]  = React.useState('Gnana Sai Sree')
  const [rank,setRank]=React.useState('12345')
  const [naq,setNaq]=React.useState('0')
  const [nah,setNah]=React.useState('0')

  React.useEffect(() => {
    Axios.post('http://localhost:8000/profile')
    .then(res => {
      console.log(res)
      setRank(res.data[0].Rank) 
      setNaq(res.data[0].Attempted)
      setNah(res.data[0].Posted) 
      setFname(res.data[0].FirstName)
      setLname(res.data[0].LastName)
      setUname(res.data[0].UserName)
      setEmail(res.data[0].Email) 
      setJoin(res.data[0].Iam) 
      setInter1(res.data[0].Interest1) 
      setInter2(res.data[0].Interest2)
      setLnkin(res.data[0].LinkedIN)
      setGit(res.data[0].GitHub) 
    })
  })
 
  // background:'linear-gradient(white, #829460)',backgroundColor:'#285430'
  return (
    <>
    <Navbar/>
    <div className='container mb-5 shadow shadow-lg mt-3 p-5 pb-5 text-white' style={{width:1200,borderRadius:"5px 90px 5px 90px",backgroundColor:"rgba(255,255,255,.2)"}}>
      <div className=' mt-5 mb-4 ps-5' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div className=' p-2 image' style={{overflow:'hidden'}}>
            <p className='h5 float-end' style={{fontFamily:'Cursive'}}><b>Rank &nbsp;</b><span className="badge bg-success rounded-pill p-2" style={{width:80,height:30}}><b>{rank}</b></span></p>
            <img src={Profile} alt="Profile" className='rounded-pill border border-white float-end' style={{width:250,height:250,transition:'all 1.5s ease',}}></img> 
        </div>

        <div className='mt-5' style={{width:500}}> 
        <p className='mt-4 pt-4 h1 float-start' style={{fontFamily:'Cursive'}}><b>{uname}</b></p>
        <p className='mt-3 h3 float-start' style={{fontFamily:'Cursive'}}><b>{email}</b></p> 
        </div>
      </div>
 

      <div className='mt-2 mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div  style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><HiPencilAlt />&nbsp; &nbsp;<b>First Name &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{fname}</h3>
        </div>
      </div>


      <div className='mb-2 ' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><HiPencilAlt />&nbsp; &nbsp;<b>Last Name &nbsp; :</b></h3>
        </div>

        <div  style={{width:580}}>
          <h3 className='mb-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{lname}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><VscBook/>&nbsp;&nbsp;<b>Joined as a &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{join}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><IoIosCheckmarkCircleOutline />&nbsp;&nbsp;<b>Interests &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <h3 className='mt-2  float-start ps-3' style={{fontFamily:'Cursive'}}>{inter1} , {inter2}</h3>
        </div>
      </div>


      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4' style={{fontFamily:'Cursive'}}><BsCardChecklist />&nbsp;&nbsp;<b>Quizes Attempted &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <p className='mt-2 h3 float-start ps-3' href='/' style={{fontFamily:'Cursive'}}>{naq}</p>
        </div>
      </div>

      <div className='mb-2' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
        <div style={{width:600}}> 
          <h3 className='mt-2 float-end pe-4 text-white' style={{fontFamily:'Cursive'}}><FaIoxhost />&nbsp;&nbsp;<b>Quizes Hosted &nbsp; :</b></h3>
        </div>

        <div style={{width:580}}>
          <p className='mt-2 h3 float-start ps-3' href='/' style={{fontFamily:'Cursive'}}>{nah}</p>
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

