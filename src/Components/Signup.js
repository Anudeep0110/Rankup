import React from 'react'
import Navbar from './Navbar'

const Signup = () => {



  return (
    <>
    <Navbar/>
    <div id='hg' className='h1 text-white ' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"800px",width:"100%"}}>
        <form>
        <div className=' shadow shadow-lg p-5' style={{display:"grid",gridTemplateColumns:"auto auto",backgroundColor:"rgba(255,255,255,.2)",borderRadius:"30px",}}>
            <div className='' style={{width:"700px",marginRight:"150px",display:"flex",alignItems:"center",justifyContent:"center",}}>
            <div className='pt-1 px-5 text-decoration-underline' style={{width:"650px",height:"700px"}}>
            <div className='text-center mb-5' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                    Sign Up
            </div>
            <div>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Enter Firstname :
            </label>
            <input type={"text"} className="form-control form-control-md mt-3" required placeholder='Firstname'></input>
            </div>
            <div className='mt-5'>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Enter Lastname :
            </label>
            <input type={"password"} className="form-control form-control-md mt-3" required placeholder='Lastname'></input>
            </div>
            <div className='mt-5'>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Enter Email Address:
            </label>
            <input type={"email"} className="form-control form-control-md mt-3" required placeholder='xyz@abc.com'></input>
            </div>
            <div className='mt-5'>
            <label className='from-label mb-3' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>Are You a </label>
            <div className='form-control form-control-md'>
            <select name="cars" style={{width:"100%",borderStyle:"hidden"}} required placeholder="select any one option" auto>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
            </select>
            </div>
            </div>
        </div>
            </div>
        <div className='py-3 px-5 text-decoration-underline' style={{width:"650px",height:"700px"}}>
        <div>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Add Profile :
            </label>
            <input type={"file"} className="form-control form-control-md mt-3" required placeholder='username'></input>
            </div>
            <div className='mt-5'>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Enter Username :
            </label>
            <input type={"text"} className="form-control form-control-md mt-3" required placeholder='username'></input>
            </div>
            <div className='mt-5'>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Enter Password :
            </label>
            <input type={"password"} className="form-control form-control-md mt-3" required placeholder='password'></input>
            </div>
            <div className='mt-5'>
            <label className='form-label' style={{fontSize:"35px",fontFamily:"Segoe UI"}}>
                Confirm Password :
            </label>
            <input type={"password"} className="form-control form-control-md mt-3" required placeholder='confirm password'></input>
            </div>
            <center>
            <div className='mt-4'>
            <button className='btn btn-danger mt-2' type={"button"} style={{width:"120px",height:"40px"}} onClick={() => window.location.replace('snext')}>Next</button>
            </div>
            </center>
        </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Signup