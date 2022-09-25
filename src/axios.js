import React, {useEffect} from "react";
import axios from 'axios'

const a = axios.post("http://58.229.6.137:3200/auth/signin",
{
  "email": "string",
  "password": "string"
}).then((res)=>{
    console.log(res)
}).catch((error) => {
    console.log(error.response);
  });

const b = axios.get("http://58.229.6.137:3200/user",
{
  "id": 0,
  "name": "string",
  "email": "string",
  "weeklyDailyCount": 0,
  "recentPositiveAvgRating": 0
}).then((res)=>{
    console.log(res)
}).catch((error) => {
    console.log(error.response);
  })

function Axios(){
    return(
        <div>
            {a()}
            {b()}
            
        </div>
    )
}
export default Axios