import React, {useEffect,useState} from "react";
import axios from 'axios'


    function Login({loginget, tokeno}){
    
        const [email_login,setEmail_login] = useState("")
        const [password_login,setPassword_login] = useState("")
        const [report,setReport] = useState("")
        const [content,setContent] = useState("")
        const [convertlogout,setConvertlogout] = useState("로그인하기")
        
        
        function changelogin(){
            setConvertlogout("로그인하기")
        }

         async function loginsend(event){
           const token = await axios.post("http://58.229.6.137:3200/auth/signin",
            {
                "email": email_login,
                "password": password_login 
            }).then(function (res) {
                console.log(res)               
                return {
                    yongjun : res.status,
                    readtoken : res.data.token
                }
            }).catch(function (error) {
                console.log(error);
            });
            

            axios.get("http://58.229.6.137:3200/user",{
            headers : {
                "Authorization" : "Bearer " + token.readtoken
            }
            })
            .then((res)=>
            console.log(res.data))
            .catch((error)=>
        console.log(error))
            
           
            {loginget(token.yongjun)}
            {tokeno(token.readtoken)}
           
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
                <button onClick={changelogin}>{convertlogout}</button>
                
                
                
                
            </div>
    
        )
    }

 export default Login;
       