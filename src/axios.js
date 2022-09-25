import React, {useEffect,useState} from "react";
import axios from 'axios'

const a = axios.post("http://58.229.6.137:3200/auth/signup",
    {
  "email": "string",
  "password": "string",
  "name": "string",
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

function Axios(){
    return(
        <div>
            {a()}
        </div>       
    )
}
export default Axios