import React, { useState } from "react";


export default function Timer(props) {
    const [count, setCount] = useState(props.timer_data['sec'])
    const [pause, set_pause] = useState(false)
    const [new_percentage, set_new_percentage] = useState({})


    function Timer() {
        var inital = props.timer_data['sec']
        const custom_interval = setInterval(() => {
            setCount(inital)
            if (pause) {
                console.log('Its paused')
            } else {
                inital = inital - 1
                calculate_progress_bar_perc(inital,props.timer_data['sec'])
            }
            if (inital < 0) {
                clearInterval(custom_interval)
            }
        }, 1000)
    }

    function calculate_progress_bar_perc(t,tt){
        var percentage_time_remaining=(t/tt)*100
        var percentage_to_display = ((percentage_time_remaining)/100) * 630
        set_new_percentage({strokeDashoffset:percentage_to_display+630})
        
    }



    return (
        <div className="timer">
            <h2 style={{color:"white"}}>{props.timer_data['label']}</h2>

            <div>

                <svg width='250px' height='250px' style={{ margin: '20px' }}>
                    <circle r='100' cx='125' cy='125' className='progress' style={new_percentage}></circle>
                    <foreignObject width="100%" height="100%">

                        <div className="clock_center_content">
                            <p style={{color:"white"}}>{count}</p>
                        </div>

                    </foreignObject>
                </svg>

            </div>

            <div className="timer_control_buttons_container">
                <img src="./img/delete.svg" alt="" onClick={(e)=>{props.delete_timer(props.key)}} />
                <img src="./img/play.svg" alt="" onClick={(e) => { Timer() }} />
                <img src="./img/repeat.svg" alt="" onClick={(e) => { Timer() }} />
            </div>
        </div>
    )
}