import React, {useEffect,useState} from "react";
import axios from 'axios'


function Enroll(){

    const [email,setEmail] = useState("")
    function onChange(event){
        setEmail(event.target.value)
    }
    const a = axios.post("http://58.229.6.137:3200/auth/signup",
    {
    "email": email ,
    "password": "string",
    "name": "string",
    "age": 0,
    "phone": "string",
    "isAgreedCounseling": false,
    "isAgreedPrivacy": false
    }
    ).then(function (response) { 
        console.log(response) 
    })
    .catch(function (error) {
        console.log(error);
    });

    return(
        <div>
            {a}
            <input onChange={onChange} value={email}></input>
        </div>
    )
}
function Login(){
  const b = axios.post("http://58.229.6.137:3200/auth/signin",{
    "email": "string",
  "password": "string"
  }).then(function (response) { 
    console.log(response) 
})
.catch(function (error) {
    console.log(error);
})

return(
    {b}
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