import React from 'react'
import tick from '../Assets/tick2.jpg'
import {MdAssignmentTurnedIn} from 'react-icons/md'

const Qod = () => {
  return (
    <>
    <div className='mt-5 mb-5 pt-5 container'>
    <div className='mt-5 h1 text-white text-center '>Quiz of the Day</div>
    <div className='container text-white mt-5 p-5 ps- shadow' style={{backgroundColor:'rgba(255,255,255,.2)',borderRadius:"10px 10px 10px 10px" }}>
      <img src={tick} className='image2 rounded-pill' style={{opacity:".8"}} ></img>
      {/* <MdAssignmentTurnedIn className='text-white image2' style={{}}/> */}
        <div className='' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
            <div className=' p-2'>
                <h1 className=' h1 mb-2 p-2'>Topic of the day</h1>
                <div className='mt-3 p-3' style={{display:'grid',gridTemplateColumns:'auto auto'}}>
                    <div className=''>
                        <p className='h3 '>Rank points : +2</p>
                    </div>
                    <div className=' '>
                        <p className='h3'>Number of Questions : 5</p>
                    </div>
                </div>
                
            </div> 
            <div className='' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <button className='btn btn-outline-info text-white h1' style={{width:"150px",height:"50px"}} onClick={() => {window.location.replace('/qofd')}}><b>Attempt</b></button>
            </div>
        </div> 
    </div> 
    </div>
    </>
  )
} 

export default Qod
