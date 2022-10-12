import React, {useEffect,useState} from "react";
import axios from 'axios'
import Enroll from './component/enroll'
import Login from './component/login'
import Read from './component/read'
import Movie from './component/movie'


function Axios(){
    const [tokendata,setTokendata] = useState()
    const [getstatus,setGetstatus] = useState()
    console.log("hello")
 

    return(
        <div>       
            <Movie moviestatus={getstatus}></Movie>
            <Login tokeno={setTokendata} loginget={setGetstatus}></Login>
            <Read type={tokendata} readOfSend={getstatus}></Read>
                    
        </div>       
    )
}
export default Axios;