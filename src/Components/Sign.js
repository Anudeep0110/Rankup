import React from 'react'
import Navbar from './Navbar'
import Bg from '../Assets/sg.jpg'
import {SiGnuprivacyguard} from 'react-icons/si'
import Axios from 'axios'

const Login = () => {

  const [uname,setUname]  = React.useState('')
  const [email,setEmail]  = React.useState('')
  const [fname,setFname]  = React.useState('')
  const [lname,setLname]  = React.useState('')
  const [join,setJoin]  = React.useState('')
  const [inter1,setInter1] = React.useState('')
  const [inter2,setInter2] = React.useState('')
  const [inter3,setInter3] = React.useState('')
  const [linkin,setLinkin]  = React.useState('')
  const [git,setGit]  = React.useState('')
  const [cfpwd,setCfpwd]=React.useState('')
  const [pwd,setPwd]=React.useState('')
  const [err,setErr]=React.useState('')
  const [imgname,setImgname]=React.useState('')
  const [img,setImg]=React.useState()

  const config =  {
    headers:{
      "Content-Type": "multipart/form-data"
    }
  }

  const Submitted = (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('img',img)
    fd.append('iname',imgname)
    fd.append('fname',fname)
    fd.append('lname',lname)
    fd.append('uname',uname)
    fd.append('email',email)
    fd.append('join',join)
    fd.append('inter1',inter1)
    fd.append('inter2',inter2)
    fd.append('inter3',inter3)
    fd.append('linkin',linkin)
    fd.append('git',git)
    fd.append('pwd',pwd)
    fd.append('cfpwd',cfpwd)
    console.log(fd)
    Axios.post('http://localhost:8000/signup',fd,config)
    .then(res => {
        window.location.replace('/login')
    })
  }

  const SaveFile = (e) => {
    setImg(e.target.files[0])
    setImgname(e.target.files[0].name)
    e.preventDefault();
  }

  const Confirm = (e) => {
    if(pwd!==e.target.value){
      setErr("Password doesn't matches")
    }
    else{
      setCfpwd(e.target.value)
      setErr('')
    }
  } 


  return (
    <>
    <Navbar />
        <div className='text-white' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",fontFamily:"Segoe UI"}}>
            <div className='' style={{width:1000,height:"100%",backgroundColor:"rgba(255,255,255,.4)",backgroundImage:`url(${Bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundBlendMode:"exclusion",borderRadius:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className='' style={{width:"500px",height:"80%"}}>
            <div className='h1 text-center mb-4 mt-5 text-decoration-underline'>Sign Up <SiGnuprivacyguard className='h1 ms-3' /></div>
            <form onSubmit={Submitted}>
            <div className=' mt-3'>
                <label className='form-label h2'>Upload your profile : </label>
                <input type={"file"} className="form-control form-control-md mt-3" onChange={SaveFile} required></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>First Name : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='First Name' onChange={(e) => setFname(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>Last Name : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='Last Name' onChange={(e) => setLname(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>User Name : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='username' onChange={(e) => setUname(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>Email : </label>
                <input type={"email"} className="form-control form-control-md mt-3" required placeholder='abc@xyz.com' onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='mt-3'>
                <label className='from-label mb-3 h2' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>Are You a </label>
                <div className='form-control form-control-md'>
                <select style={{width:"100%",borderStyle:"hidden"}} required placeholder="select any one option" onChange={(e) => {setJoin(e.target.value)}}>
                <option value="student" disabled="true" selected="true">select one option</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
                </select>
                </div>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>Interest : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='interest 1' onChange={(e) => setInter1(e.target.value)}></input>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='interest 2' onChange={(e) => setInter2(e.target.value)}></input>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='interest 3' onChange={(e) => setInter3(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>LinkedIn Profile : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='LinkedIn' onChange={(e) => setLinkin(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>GitHub Profile : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='Github' onChange={(e) => setGit(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>Password : </label>
                <input type={"password"} className="form-control form-control-md mt-3" required placeholder='password' onChange={(e) => setPwd(e.target.value)}></input>
              </div>
              <div className=' mt-3'>
                <label className='form-label h2'>Confirm Password : </label>
                <input type={"password"} className="form-control form-control-md mt-3" required placeholder='confirm password' onChange={Confirm}></input>
              </div>
              <div className='h6 text-danger mt-1'>{err}</div>
              <div className=' mt-5'>
                <center> 
                <button className='btn btn-outline-info  h2 text-center mb-5' style={{width:"100%",height:"40px"}}>SignUp</button>
                </center>
              </div>
            </form>
            </div>
            </div>
        </div>
        <div className='mt-5 h3 text-center mb-5'>
            <a href='/login' className='text-white text-decoration-none'>Already Have an Account / Login</a>
        </div>
    </>
  )
}

export default Login