import React from 'react'
import Navbar from './Navbar'
import {AiOutlineLogin} from 'react-icons/ai'
import Axios from 'axios'
import Log from '../Assets/log.jpg'
import '../Components/Css/Pop.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import tick from '../Assets/tick.jpg'
const Login = () => {
  const [uname,setUname] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [out,setOut] = React.useState('')
  const [pop,setPop] = React.useState(false)

  const toggle = () => {
    setPop(!pop)
  }

  const Submit = (e) => {
    Axios.post('http://localhost:8000/login',{
        sendinguname : uname,
        sendingpwd : password,
      })  
      .then((response) => {
        if(response.data.msg ==='1'){
          toggle()
        }
        else{
          setOut(response.data.msg)
        }
      }) 
      e.preventDefault()
    }   
 return (
    <>
    <Navbar />
        <div className='text-dark' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"700px",width:"100%",fontFamily:"Segoe UI"}}>
            <div className='' style={{width:1000,height:550,backgroundColor:"rgba(255,255,255,1)",borderRadius:"30px",display:"flex",alignItems:"center"}}>
            <div className=' border border-dark' style={{width:"1000px",height:"100%",display:"grid",gridTemplateColumns:"auto auto"}}>
            <form className=' ms-5 ps-5 mt-5' style={{width:"400px"}} onSubmit={Submit}>
            <div className='h1 text-center mb-4 text-decoration-underline'>Login <AiOutlineLogin /></div>
              <div className=' mt-3'>
                <label className='form-label h2'>Username : </label>
                <input type={"text"} className="form-control form-control-md mt-3" required placeholder='username' onChange={(e) => setUname(e.target.value)}></input>
              </div>
              <div className=' mt-5'>
                <label className='form-label h2'>Password : </label>
                <input type={"password"} className="form-control form-control-md mt-3" required placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='h6 mt-1 text-danger'>{out}</div>
              <div className=' mt-5'> 
                <center>
                <button className='btn btn-outline-info h2 text-center p-2' style={{width:"100%"}}>Login</button>
                </center>
              </div>
            </form>
            <img className='rounded' alt='Logo' src={Log} style={{height:"100%",width:"500px"}}></img>
            </div>
            </div>
            
        </div>
        <div className=' h3 text-center mb-5'>
            <a href='/signup' className='text-white text-decoration-none'>Not a user / Signup</a>
        </div>
        {pop && (
      <div className='pop'>

        <div onClick={toggle} className='overlay' style={{backgroundColor:"rgba(0,0,0,.8)"}}></div>


        <div className='p-4 m-5 pop-content border bg-white  text-dark' style={{width:600,height:350}}>

          <img className='image1 rounded-pill' src={tick} alt=''></img> 
          <div className='  text-center mt-2' style={{height:"250px"}}>
              <div className='' style={{display:"grid",height:"100%",gridTemplateColumns:"275px 2px 280px"}}>
                <div className=' ' >
                  <p className='h2 mt-3'>Host a Quiz</p>
                  <p className='h4 mt-3 px-4 py-2'>You can host your quiz by clicking below</p>
                <button className="btn btn-outline-success mt-3" style={{width:"100px"}}><b>Host</b></button>
                </div>
                <div className='bg-dark mt-3' style={{height:"90%"}}></div>
                <div className=' ' >
                <p className='h2 mt-3'>Attempt a Quiz</p>
                  <p className='h4 mt-3 p-2'>You can attempt quizzes by clicking below</p>
                <button className="btn btn-outline-success mt-3" style={{width:"100px"}}><b>Attempt</b></button>
                </div>
              </div>
          </div>
            <AiOutlineCloseCircle className='close-pop m-3 text-danger' size='2em' onClick={toggle} style={{cursor: 'pointer'}} />
        </div>
      </div> 
    )}
    </>
  )
}

export default Login