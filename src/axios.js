import React, {useEffect,useState} from "react";
import axios from 'axios'


function Enroll(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    
    function emailc(event){
        setEmail(event.target.value)
    }
    

    function passwordc(event){
        setPassword(event.target.value)
    }

    function namec(event){
        setName(event.target.value)
    }
    
    function send(event){
        const a = axios.post("http://58.229.6.137:3200/auth/signup",
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
                <input onChange={emailc} value={email} placeholder='email'></input>
            </p>
            <p>
                <input onChange={passwordc} value={password}  placeholder='password'></input>             
            </p>
            <p>
                <input onChange={namec} value={name} placeholder='name'></input>
            </p>
            <button onClick={send}>보내기</button>
                           
        </div>
    )
}

function Login(){
    

    const [emaillogin,setEmaillogin] = useState("")
    const [passwordlogin,setPasswordlogin] = useState("")

    function emailonchange(event){
        setEmaillogin(event.target.value)
    }

    function passwordonchange(event){
        setPasswordlogin(event.target.value)
    }
    function loginsend(event){
        const b = axios.post("http://58.229.6.137:3200/auth/signin",
        {
            "email": emaillogin,
            "password": passwordlogin 
        }).then(function (response) { 
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });
    }
        

    return(
        <div>
            <p>
                <h3>로그인</h3>
            </p>
            <p>
                <input onChange={emailonchange} value={emaillogin} placeholder='email'></input>
            </p>
            <p>
                <input onChange={passwordonchange} value={passwordlogin} placeholder='password'></input>
            </p>
            <button onClick={loginsend}>보내기</button>
        </div>

    )
}


function Axios(){
    return(
        <div>
            <Enroll></Enroll>
            <Login></Login>       
        </div>       
    )
}
export default Axios;