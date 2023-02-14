import React from 'react'
import Navbar from './Navbar'
import Axios  from 'axios'
import '../Components/Css/Pop.css'
import tick from '../Assets/tick.jpg'

const QodQuest = () => {

  const [q1,setQ1] = React.useState({})
  const [q2,setQ2] = React.useState({})
  const [q3,setQ3] = React.useState({})
  const [q4,setQ4] = React.useState({})
  const [q5,setQ5] = React.useState({})
  const [score,setScore] = React.useState(0)
  const [ans,setAns] = React.useState({an1:"null",an2:"null",an3:"null",an4:"null",an5:"null"})
  const [cans,setCans] = React.useState({an1:"null",an2:"null",an3:"null",an4:"null",an5:"null"})
  const [f,setF] = React.useState(false)
  const [pop,setPop] = React.useState(false)
  const [msg,setMsg] = React.useState('')

  const toggle = () => {
    setPop(!pop)
  }

  function countdown(minutes) {    
    var seconds = 60;
    var mins = minutes
    function tick() {
          
        var counter = document.getElementById("time");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = "00 : 0"+current_minutes.toString() + " : " + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
            else{
              document.getElementById('sub').click();
            }
        }
    }
    tick();
}

  const Attempt = (e) => {
  countdown(5);
    document.getElementById("quiz").style['filter'] = "blur(0px)";
    document.getElementById("quiz").style['visibility'] = "visible";
    document.getElementById("form").style['visibility'] = "visible";
    document.getElementById("btn").setAttribute('disabled','true');
      e.preventDefault()
     Axios.post('http://localhost:8000/qod')
    .then(res => {
      setQ1(res.data[0])
      setQ2(res.data[1])
      setQ3(res.data[2])
      setQ4(res.data[3])
      setQ5(res.data[4])
      let index = 0;
      for(var i in cans){
          cans[i] = res.data[index].Answer;
        index=index+1;
      }
    })
  }

  const Submitted = (e) => {
    e.preventDefault()
    document.getElementById('time').style['visibility'] = 'hidden'
    toggle()
    setF(true)
    Axios.post('http://localhost:8000/ans').then(res => {
      let count=0;
      let index = 0;
      for(var i in ans){
              if(res.data[index].Answer === ans[i]){
                  count=count+1;
              }
        index=index+1;
    }
    setScore(count)
    if(count===5){
      setMsg('Excellent! Keep it Up')
    }else if(count===4){
      setMsg('Challenging! Try to get out of')
    }else if(count===3){
      setMsg('Good! Keep Practicing')
    }else{
      setMsg('Work Hard')
    }

    })
    document.getElementById('sub').disabled = "true"
  } 

  const Valued = (e) => {
    ans[e.target.name] = e.target.value
    console.log(ans)
  }

  return (
    <>
    <Navbar />
    <div className='text-center container rounded p-2 mt-5' style={{backgroundColor:"rgba(255,255,255,1)"}}>
      <div id='time' className='h2 float-end text-danger'>Time Starts Here </div>
    <div className='h1 mt-5 text-dark'>Quiz of the Day</div>
    <div className='h2 mt-2 text-danger'>Timer starts immediately after you click attempt</div>
    <div className='h2 mt-2 text-dark'>Quiz ends in 5 minutes</div>
    <button className='btn btn-outline-info mt-5 mb-5 h1'  id='btn' onClick={Attempt}><b>Attempt</b></button>
    </div>
    <div className='container py-4 mt-5 ' id="quiz" style={{backgroundColor:"rgba(255,255,255,0.2",filter:"blur(10px)",visibility:"hidden",width:"100%"}}>
        <div className='container mt-5' style={{display:"flex",justifyContent:"center",alignItems:"center",visibility:"hidden",width:"100%"}}>
          <form id='form' style={{visibility:"hidden"}} onSubmit={Submitted}>
                    <div className='float-start bg-white p-4 rounded' onChange={Valued}>
                      <label className='form-label h3 mb-4'>
                        {q1.Question}
                        </label>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q1.Option1} name="an1"></input>
                        <label className='h4'>&nbsp;&nbsp;{q1.Option1}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q1.Option2} name="an1"></input>
                        <label className='h4'>&nbsp;&nbsp;{q1.Option2}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q1.Option3} name="an1"></input>
                        <label className='h4'>&nbsp;&nbsp;{q1.Option3}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q1.Option4} name="an1"></input>
                        <label className='h4'>&nbsp;&nbsp;{q1.Option4}</label>
                        </div>
                        <div>
                          {f?
                        <label className='h4 text-success mt-3'>Ans : &nbsp;&nbsp;{cans.an1}</label>:<></>}
                        </div>
                      </div>
                      <div className='float-start bg-white p-4 rounded mt-5' onChange={Valued}>
                      <label className='form-label h3 mb-4'>
                        {q2.Question}
                        </label>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q2.Option1} name="an2"></input>
                        <label className='h4'>&nbsp;&nbsp;{q2.Option1}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q2.Option2} name="an2"></input>
                        <label className='h4'>&nbsp;&nbsp;{q2.Option2}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q2.Option3} name="an2"></input>
                        <label className='h4'>&nbsp;&nbsp;{q2.Option3}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q2.Option4} name="an2"></input>
                        <label className='h4'>&nbsp;&nbsp;{q2.Option4}</label>
                        </div>
                        <div>
                          {f?
                        <label className='h4 text-success mt-3'>Ans : &nbsp;&nbsp;{cans.an2}</label>:<></>}
                        </div>
                      </div>
                      <div className='float-start bg-white p-4 rounded mt-5' onChange={Valued}>
                      <label className='form-label h3 mb-4'>
                        {q3.Question}
                        </label>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q3.Option1} name="an3"></input>
                        <label className='h4'>&nbsp;&nbsp;{q3.Option1}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q3.Option2} name="an3"></input>
                        <label className='h4'>&nbsp;&nbsp;{q3.Option2}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q3.Option3} name="an3"></input>
                        <label className='h4'>&nbsp;&nbsp;{q3.Option3}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q3.Option4} name="an3"></input>
                        <label className='h4'>&nbsp;&nbsp;{q3.Option4}</label>
                        </div>
                        <div>
                          {f?
                        <label className='h4 text-success mt-3'>Ans : &nbsp;&nbsp;{cans.an3}</label>:<></>}
                        </div>
                      </div>
                      <div className='float-start bg-white p-4 rounded mt-5' onChange={Valued}>
                      <label className='form-label h3 mb-4'>
                        {q4.Question}
                        </label>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q4.Option1} name="an4"></input>
                        <label className='h4'>&nbsp;&nbsp;{q4.Option1}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q4.Option2} name="an4"></input>
                        <label className='h4'>&nbsp;&nbsp;{q4.Option2}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q4.Option3} name="an4"></input>
                        <label className='h4'>&nbsp;&nbsp;{q4.Option3}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q4.Option4} name="an4"></input>
                        <label className='h4'>&nbsp;&nbsp;{q4.Option4}</label>
                        </div>
                        <div>
                          {f?
                        <label className='h4 text-success mt-3'>Ans : &nbsp;&nbsp;{cans.an4}</label>:<></>}
                        </div>
                      </div>
                      <div className='float-start bg-white p-4 rounded mt-5' onChange={Valued}>
                      <label className='form-label h3 mb-4'>
                        {q5.Question}
                        </label>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q5.Option1} name="an5"></input>
                        <label className='h4'>&nbsp;&nbsp;{q5.Option1}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q5.Option2} name="an5"></input>
                        <label className='h4'>&nbsp;&nbsp;{q5.Option2}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q5.Option3} name="an5"></input>
                        <label className='h4'>&nbsp;&nbsp;{q5.Option3}</label>
                        </div>
                        <div>
                        <input className='form-label' type={"radio"}  id="inp"   value={q5.Option4} name="an5"></input>
                        <label className='h4'>&nbsp;&nbsp;{q5.Option4}</label>
                        </div>
                        <div>
                          {f?
                        <label className='h4 text-success mt-3'>Ans : &nbsp;&nbsp;{cans.an5}</label>:<></>}
                        </div>
                      </div>
                      <center>
                      <button id='sub' className='btn btn-outline-info mt-5 border border-info' type='submit'><b>Submit</b></button>
                      </center>
              </form>
        </div>
        </div>
        {pop && (
      <div className='pop'>

        <div onClick={toggle} className='overlay' style={{backgroundColor:"rgba(0,0,0,.8)"}}></div>


        <div className='p-4 m-5 pop-content border bg-white  text-dark' style={{width:600,height:350}}>

          <img className='image1 rounded-pill' src={tick} alt=''></img> 
          <div className='  text-center mt-2' style={{height:"250px"}}>
              <div className='container'>
              <p className='h1 text-success mt-1'>Submitted</p>
                <p className='h1 text-dark mt-3'>Your Score : {score}</p>
                <p className='h1 text-danger mt-3'>{msg}</p>
                <button className='btn btn-outline-success mt-4' onClick={() => window.location.replace('/')} style={{width:100}}><b>Next</b></button>
              </div>
          </div>
          {/* <AiOutlineCloseCircle className='close-pop m-3 text-danger' size='2em' onClick={toggle} style={{cursor: 'pointer'}} /> */}
        </div>
      </div> 
    )}
    </>
  )
}

export default QodQuest