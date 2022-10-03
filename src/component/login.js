import React, {useEffect,useState} from "react";
import axios from 'axios'


    function Login({name}){
    
        const [email_login,setEmail_login] = useState("")
        const [password_login,setPassword_login] = useState("")
        const [report,setReport] = useState("")
        const [content,setContent] = useState("")
    
         async function loginsend(event){
           const token = await axios.post("http://58.229.6.137:3200/auth/signin",
            {
                "email": email_login,
                "password": password_login 
            }).then(function (res) { 
                return res.data.token 
            }).catch(function (error) {
                console.log(error);
            });

            axios.get("http://58.229.6.137:3200/user",{
            headers : {
                "Authorization" : "Bearer " + token
            }
            })
            .then((res)=>
            console.log(res.data))
            .catch((error)=>
        console.log(error))
        
            {name(token)}
    
        }


        
        return(
            <div>
                <p>
                    <h3>로그인</h3>
                </p>
                <p>
                    <input onChange={(event)=>{setEmail_login(event.target.value)}} value={email_login} placeholder='email'></input>
                </p>
                <p>
                    <input onChange={(event)=>{setPassword_login(event.target.value)}} value={password_login} placeholder='password'></input>
                </p>
                <button onClick={loginsend}>로그인하기</button>
                
                
                
            </div>
    
        )
    }

 export default Login;
       