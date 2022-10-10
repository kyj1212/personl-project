import {useEffect, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"
 

function Movie({name,moviestatus}){
    const [subject,setSubject] = useState("보고싶은사람")
    const [subtitle,setSubtitle] = useState("링크를 클릭")
    const [command,setComand] = useState("")
    const [attend,setAttend] = useState([])
    const pagemove = ['/','/hook']
    const navigate = useNavigate()
    const [convertlogout,setConvertlogout] = useState("로그인하기")

   
  
    function introduce(event){
      setSubject("이 영화는 상당히 재밌습니다")
      setSubtitle("다른 소개를 보고싶으면 링크 클릭")
    }
    function person(event){
      setSubject("하정우,마동석")
      setSubtitle("다른 소개를 보고싶으면 링크 클릭")
    }
    function story(event){
      setSubject("줄거리는 없습니다 ")
      setSubtitle("다른 소개를 보고싶으면 링크 클릭")
    }
    function onChange(event){
      setComand(event.target.value)
    }
    function onSubmit(event){
      event.preventDefault(attend,command)
      setAttend( [command, ...attend])  
    }
    function select(event){
      navigate("/hook")
    }
    function membership(event){
      navigate("/gomembership")
    }

   
    console.log(moviestatus)
    if(moviestatus === '201'){
      setConvertlogout("로그아웃하기")
    }else{
      console.log('실패')
    }
    
   
    return(
      <div>
        <div id='asd'>
          <p  onClick={membership}>
           <span class='membership'>멤버쉽 가입하기</span> 
          </p>
          <button>{convertlogout}</button>
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
        {attend.map(k=>(
            <li>
              {k}
            </li>
        ))}
        
        <h3>리뷰달기</h3>
        <form onSubmit={onSubmit}>
          <input value={command} type='text' placeholder='clean봇이 감지중입니다' onChange={onChange}>
          </input>
          <button>댓글추가</button>
        </form>
         <select onChange={select}>
          {pagemove.map((item) => (
              <option value={item}>하이</option>
  
          )) //질문 링크 걸기
          }
        </select> 
       
      </div>
    )
  }

export default Movie;