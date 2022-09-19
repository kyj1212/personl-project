import logo from './logo.svg';
import './App.css';
import {useEffect, useState,useRef} from 'react';

function Movie(){
  const [subject,setSubject] = useState("보고싶은사람")
  const [subtitle,setSubtitle] = useState("링크를 클릭")
  const [command,setComand] = useState("")
  const [attend,setAttend] = useState([])
  
  function introduce(event){
    event.preventDefault()
    setSubject("이 영화는 상당히 재밌습니다")
    setSubtitle("다른 소개를 보고싶으면 링크 클릭")
  }
  function person(event){
    event.preventDefault()
    setSubject("하정우,마동석")
    setSubtitle("다른 소개를 보고싶으면 링크 클릭")
  }
  function story(event){
    event.preventDefault()
    setSubject("줄거리는 없습니다 ")
    setSubtitle("다른 소개를 보고싶으면 링크 클릭")
  }
  function onChange(event){
    setComand(event.target.value)
    console.log(command)
  }
  function sum(event){
    setAttend()
  }
 

  return(
    <div>
      <img id='movie_moun' src='mountain.jpg'></img>
      <ul>
        <li><h2><a href='/home'>홈으로</a></h2></li>
        <li><a onClick={introduce} href=''>영화소개</a></li>
        <li><a onClick={person} href=''>등장인물</a></li>
        <li><a onClick={story} href=''>줄거리</a></li>
      
      </ul>
      <h1>{subject}</h1>
      <h2>{subtitle}</h2>
      
      <h3>리뷰달기</h3>
      <input value={command} type='text' placeholder='clean봇이 감지중입니다' onChange={onChange}>
      </input>
      <button onClick={sum}>댓글추가</button>
    </div>
  )
}

function App(){
  
  return(
    <div>
      <Movie></Movie>
    </div>
  )
}


export default App;
