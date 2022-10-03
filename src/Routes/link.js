import './link.css';
import {useEffect, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"
import Axios from "../axios"
import Movie from "../component/movie"


function Link(){
  return(
    <div>
      <Movie></Movie>
      <Axios></Axios>
    </div>
  )
}


export default Link;
