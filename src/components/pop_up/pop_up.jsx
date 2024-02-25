import React, { useState } from "react";

export default function Pop_up(props) {
    function close_popup() {
        var closePopup = document.getElementById("popupclose");
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        var button = document.getElementById("button");
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }

    const [label,set_label]=useState("")
    const [hrs,set_hrs]=useState(0)
    const [min,set_min]=useState(0)
    const [sec,set_sec]=useState(0)

    return (
        <>
            <div id="overlay" onClick={(e)=>{close_popup()}} ></div>


            <div id="popup">
                <div className="popup_container">
                    <h3>Add new Countdown</h3>

                    <div className="label_container">
                        <span>Label</span>
                        <div className="label_input_container">
                            <input type="text" value={label} onChange={e=>{set_label(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="all_time_container">

                        <div className="time_container">
                            <span>Hour</span>
                            <div className="time_input_container">
                                <input type="number" value={hrs} onChange={e=>{set_hrs(e.target.value)}} />
                            </div>
                        </div>

                        <div className="time_container">
                            <span>Min</span>
                            <div className="time_input_container">
                                <input type="number" value={min} onChange={e=>{set_min(e.target.value)}} />
                            </div>
                        </div>

                        <div className="time_container">
                            <span>Sec</span>
                            <div className="time_input_container">
                                <input type="number" value={sec } onChange={e=>{set_sec(e.target.value)}} />
                            </div>
                        </div>
                    </div>

                    <button className="add_new_timer_button" onClick={e=>{props.add_timer(label,hrs,min,sec);close_popup()}}>Add</button>

                </div>
            </div>
        </>
    )
}