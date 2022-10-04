import React, {useEffect,useState} from "react";
import axios from 'axios'
import Enroll from './component/enroll'
import Login from './component/login'
import Read from './component/read'



function Axios(){
    const [hello,setHello] = useState()
    return(
        <div>         
            <Login name={setHello} token={hello}></Login>
            <Read type={hello}></Read>           
        </div>       
    )
}
export default Axios;