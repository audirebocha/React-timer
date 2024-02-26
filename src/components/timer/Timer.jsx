import React, { useState, useEffect } from "react";


export default function Timer(props) {
    const [count, setCount] = useState(props.timer_data['sec'])
    const [pause, set_pause] = useState(false)
    const [new_percentage, set_new_percentage] = useState({})
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        var Date_time = new Date()
        Date_time.setHours(props.timer_data['hrs']);
        Date_time.setMinutes(props.timer_data['min']);
        Date_time.setSeconds(props.timer_data['sec']);
        setTime(Date_time)
    }, [])





    function Timer() {


        const custom_interval = setInterval(() => {
            setCount(10)
            if (pause) {
                console.log('Its paused')
            } else {
                var milliseconds = time.getTime();
                milliseconds -= 1000; // Decrement by 1 second in milliseconds

                // Handle negative values and overflow
                if (milliseconds < 0) {
                    milliseconds += (1000 * 60 * 60 * 24); // Add a day in milliseconds
                }

                time.setTime(milliseconds);
                calculate_progress_bar_perc((time.getHours() * 360) + (time.getMinutes() * 60) + (time.getSeconds()), (props.timer_data['hrs'] * 360) + (props.timer_data['min'] * 60) + props.timer_data['sec'])


            }
            if (time.getHours() === 0 && time.getMinutes() === 0 && time.getSeconds() === 0) {
                time.setHours(props.timer_data['hrs']);
                time.setMinutes(props.timer_data['min']);
                time.setSeconds(props.timer_data['sec']);
                clearInterval(custom_interval)
            }
        }, 1000)
    }

    function calculate_progress_bar_perc(t, tt) {
        var percentage_time_remaining = (t / tt) * 100
        var percentage_to_display = ((percentage_time_remaining) / 100) * 630
        set_new_percentage({ strokeDashoffset: percentage_to_display + 630 })
    }



    return (
        <div className="timer">
            <h2 style={{ color: "white" }}>{props.timer_data['label']}</h2>

            <div>

                <svg width='250px' height='250px' style={{ margin: '20px' }}>
                    <circle r='100' cx='125' cy='125' className='progress' style={new_percentage}></circle>
                    <foreignObject width="100%" height="100%">

                        <div className="clock_center_content">
                            <h1 style={{ color: "white" }}>{time.toTimeString().slice(0, 8)}</h1>
                        </div>

                    </foreignObject>
                </svg>

            </div>

            <div className="timer_control_buttons_container">
                <img src="./img/delete.svg" alt="" onClick={(e) => { props.delete_timer(props.key) }} />
                <img src="./img/play.svg" alt="" onClick={(e) => { Timer() }} />
                <img src="./img/repeat.svg" alt="" onClick={(e) => { Timer() }} />
            </div>
        </div>
    )
}