import React from 'react'
import Navbar from './Navbar'
import Qs from '../Assets/qs.png'
import Axios from 'axios'
const HostQs = () => {
  const [flag,setFlag] = React.useState(0) 
  const [c,setC] = React.useState(1) 
  const [q,setQ] = React.useState('')
  const [t,setT] = React.useState('') 
  const [o1,setO1] = React.useState('') 
  const [o2,setO2] = React.useState('') 
  const [o3,setO3] = React.useState('') 
  const [o4,setO4] = React.useState('') 
  const [a,setA] = React.useState('') 

  const Nextt = (e) => {
    e.preventDefault()  
    document.getElementById('noq').style['visibility']='collapse'
    document.getElementById('head').classList.remove('mb-5')
    setC(c+1) 
    document.getElementById('fm').reset() 

    Axios.post('http://localhost:8000/hqs',{
        topic : t,
        question : q,
        option1 : o1,
        option2 : o2,
        option3 : o3,
        option4 : o4,
        ans : a
    })
    .then(response => console.log(response))

} 
  const Submit = (e) => {
    e.preventDefault() 
    Axios.post('http://localhost:8000/hqs',{
        topic : t,
        question : q,
        option1 : o1,
        option2 : o2,
        option3 : o3,
        option4 : o4,
        ans : a
    })
    .then(response => console.log(response))
    window.location.replace('/')
    } 

  return (
    <>
    <Navbar/> 
    <div className='container rounded mt-4 mb-5 p-5' style={{backgroundColor:"rgba(255,255,255,.9)",}}>
        <div className='text-center h1 text-success mb-5' id='head'><img src={Qs} alt='Question' className='me-2'></img>Question {c}</div>
            <form id='fm' className="text-dark h4">
                <div id='noq' className='container p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Number of Questions : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 border-success bg-transparent rounded-0' type={'text'} onChange={(e) => setFlag(parseInt(e.target.value))}></input>
                </div>
                <div className='container  p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Topic : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setT(e.target.value)}></input>
                </div>
                <div className='container p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Question :</label>
                    <textarea wrap='soft' className='form-control w-100 form-control-sm border-success bg-transparent' style={{maxHeight:"250px",minHeight:"250px"}} type={'text'} onChange={(e) => setQ(e.target.value)}></textarea>
                </div>
                <div className='container  p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Option 1 : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setO1(e.target.value)}></input>
                </div>
                <div className='container  p-4 d-inline-flex'>
                        <label className='form-label h4 w-50 text-end pe-5'>Enter the Option 2 : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setO2(e.target.value)}></input>
                </div>
                <div className='container  p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Option 3 : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setO3(e.target.value)}></input>
                </div>
                <div className='container  p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Option 4 : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setO4(e.target.value)}></input>
                </div>
                <div className='container  p-4 d-inline-flex'>
                    <label className='form-label h4 w-50 text-end pe-5'>Enter the Correct answer : </label>
                    <input className='form-control w-100 form-control-sm border-top-0 border-start-0 border-end-0 bg-transparent border-success rounded-0' type={'text'} onChange={(e) => setA(e.target.value)}></input>
                </div>
                {(c!==flag)?<div className='text-center mt-5'><button className='btn btn-outline-success' style={{width:"100px"}} onClick={Nextt}><b>Next</b></button></div>:<div className='text-center mt-5'><button type={'submit'} className='btn btn-outline-success' style={{width:"100px"}} onClick={Submit}><b>Submit</b></button></div>}
  
            </form>
    </div>

    </>
  ) 
} 
export default HostQs

