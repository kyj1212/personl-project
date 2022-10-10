import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'


function Enroll(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const member = useNavigate()
    
    function memship_send(event){
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
        ).then(function (response) { 
            console.log(response)
            member("/")
            alert("가입에 성공하셨습니다")
        })
        .catch(function (error) {
            console.log(error);
            alert("이미 존재하는 정보입니다")
            
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
            <button onClick={memship_send}>회원가입하기</button>                        
        </div>
    )
}

export default Enroll;