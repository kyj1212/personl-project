import React, { useRef } from "react";

function Kmovie(){
    const element = useRef();
    function fullbutton(event){
        if(element.current){
            element.current.requestFullscreen()
        }
    }

    function back(evnet){
        window.location.href = '/'
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