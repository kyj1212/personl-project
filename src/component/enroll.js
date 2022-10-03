import React, {useEffect,useState} from "react";
import axios from 'axios'


function Enroll(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    
    
    function send(event){
         axios.post("http://58.229.6.137:3200/auth/signup",
        {
            "email": email,
            "password": password,
            "name": name,
            "age": 0,
            "phone": "string",
            "isAgreedCounseling": false,
            "isAgreedPrivacy": false
    
        }
        ).then(function a(response) { 
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });

   

        }

    return(
        <div>
            <p>
                <h3>회원가입</h3>
            </p>
            <p>
                <input onChange={(event)=>{setEmail(event.target.value)}} value={email} placeholder='email'></input>
            </p>
            <p>
                <input onChange={(event)=>{setPassword(event.target.value)}} value={password}  placeholder='password'></input>             
            </p>
            <p>
                <input onChange={(event)=>{setName(event.target.value)}} value={name} placeholder='name'></input>
            </p>
            <button onClick={send}>회원가입하기</button>                        
        </div>
    )
}

export default Enroll;