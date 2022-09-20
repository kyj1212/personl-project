import logo from './logo.svg';
import './link.css';
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
  }
  function onSubmit(event){
    event.preventDefault(attend,command)
    setAttend(function(){
      return [command, ...attend] // comand가 인자로 안들어갔는데 comand가 나오는게 궁금
    })
  }
  
  return(
    <div>
      <div id='asd'>
        <img id='movie_moun' src='mountain.jpg'></img>
      </div>
        <div id='home'><h2><a href='/home' id='home_id'>홈으로</a></h2></div>
        <div id='introduce'>
          <a id='intro_intro' onClick={introduce} href=''>영화소개</a>
          <a id='intro_person' onClick={person} href=''>등장인물</a>
          <a id='intro_story' onClick={story} href=''>줄거리</a>
        </div>
      <div id='intro_output'>
        <h1>{subject}</h1>
        <h2>{subtitle}</h2>
      </div>
      
      <h3>리뷰달기</h3>
      <form onSubmit={onSubmit}>
        <input value={command} type='text' placeholder='clean봇이 감지중입니다' onChange={onChange}>
        </input>
        <button>댓글추가</button>
      </form>
      <h3>{attend}</h3>
      <select>
        <option value="kmovie.js">zzzzzzzzz</option>
        <option>tttt</option>
      </select>

    </div>
  )
}

function Link(){
  
  return(
    <div>
      <Movie></Movie>
    </div>
  )
}


export default Link;
