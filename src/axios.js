import React, {useEffect,useState} from "react";
import axios from 'axios'
import Enroll from './axi component/enroll'
import Login from './axi component/login'



function Axios(){
    return(
        <div>
            <Enroll></Enroll>
            <Login></Login>
        </div>       
    )
}
export default Axios;