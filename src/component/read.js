import React, {useEffect,useState} from "react";
import axios from 'axios'

function Read({type}){
 
    const [report,setReport] = useState("")
    const [content,setContent] = useState("")
    
    function reportsend(event){
        
        axios.post("http://58.229.6.137:3200/record",
        {
           "content": report,
            "agenda": content,
        
        },{
            headers : {
                "Authorization" : "Bearer " + type
            }
        }).then(function (response) { 
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    } 

    return(
        <div>
            <h3>쓰기</h3>
            <p>
                <input onChange={(event)=>setReport(event.target.value)} value={report} placeholder='주제'></input>
            </p>
            <p>
                <textarea onChange={(event)=>setContent(event.target.value)} value={content} placeholder="content"></textarea>
            </p>
            <button onClick={reportsend}>전송하기</button>
        </div>
    )
}

export default Read;