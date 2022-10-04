import './link.css';
import {useEffect, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"
import Axios from "../axios"
import Movie from "../component/movie"


function Link(){
  const [love,setLove] = useState(0)
  
  function good(event){
    setLove(love+1)
  }
  return(
    <div>
      <Movie></Movie>
      <Axios></Axios>
      <p>
        <span>이 영화를 추천합니다 <span onClick={good}>👍{love}</span> </span>
      </p>
    </div>
  )
}


export default Link;
