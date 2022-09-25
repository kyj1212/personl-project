import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"

function Kmovie(){
    const element = useRef();
    const navigate = useNavigate()
    function fullbutton(event){
        if(element.current){
            element.current.requestFullscreen()
        }
    }

    function back(evnet){
        navigate("/")
    }

    return(
        <div>
            <p>
                <img ref={element} src="busan.jpg"></img>
                <button onClick={fullbutton}>화면 크게 만들기</button>
            </p>
            <button onClick={back}>돌아가기</button>
        </div>
    )
}
export default Kmovie;