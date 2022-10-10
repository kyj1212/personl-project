import React, {useEffect,useState} from "react";
import axios from 'axios'
import Enroll from './component/enroll'
import Login from './component/login'
import Read from './component/read'
import Movie from './component/movie'


function Axios(){
    const [tokendata,setTokendata] = useState()
    const [getstatus,setGetstatus] = useState()

    function testbutton(event){
        console.log(getstatus)
        console.log(tokendata)
    }
    return(
        <div>       
            <Movie moviestatus={getstatus}></Movie>
            <Login tokeno={setTokendata} loginget={setGetstatus}></Login>
            <Read type={tokendata}></Read>
            <button onClick={testbutton}>테스트버튼</button>         
        </div>       
    )
}
export default Axios;