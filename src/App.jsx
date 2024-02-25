import { useEffect, useState } from 'react'
import './App.css'

//Components
import Timer from './components/timer/Timer'
import Pop_up from './components/pop_up/pop_up'

function App() {
  const [timers,set_timers]=useState([])


  function show_popup() {
    // Initialize Variables
    var closePopup = document.getElementById("popupclose");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var button = document.getElementById("button");
    overlay.style.display = 'block';
    popup.style.display = 'block';

  }

  function delete_timer(idx){
    // assigning the list to temp variable
    const temp = [...timers];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    set_timers(temp);
}


  useEffect(()=>{
    set_timers([...timers,{label:"My first Timer",hrs:0,min:0,sec:10}])
  },[])

  function add_timer(label,hrs,min,sec){
    set_timers([...timers,{label:label,hrs:hrs,min:min,sec:sec}])
  }

  return (
    <>
      <h2>Countdown timer</h2>
      <div className="body">

        <div className="timer_container">

          {timers.map((timer,index)=>{
            console.log(index)
            return <Timer key={index} delete_timer={delete_timer} timer_data={timer} ></Timer>
          })}



        </div>
      </div>

      <div className="add_button_container">
        <img id="button" src="./img/plus.svg"  onClick={(e)=>{show_popup()}} alt="" />
      </div>

      <Pop_up add_timer={add_timer} ></Pop_up>


    </>
  )
}

export default App
