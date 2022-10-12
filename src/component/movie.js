import {useEffect, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"
 

function Movie({name,moviestatus}){
    const [subject,setSubject] = useState("보고싶은사람")
    const [subtitle,setSubtitle] = useState("링크를 클릭")
    const [command,setComand] = useState("") //댓글구현
    const [attend,setAttend] = useState([])
    const pagemove = ['/','/hook']
    const navigate = useNavigate()
    const [convertlogout,setConvertlogout] = useState("로그인하기")
    const nameinput = useRef()

    function changeCommend(event){
      for(let i=0; i<attend.length; i++){
        if(event.target.value===attend[i]){
          setComand(attend.splice(i,1,"hello"))
        }

      }
    }
    function removecommand(event){
      for(let k=0; k<attend.length; k++){
        if(event.target.value===attend[k]){
          setComand(attend.splice(k,1))
        }
      }
    }
  
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
    } //댓글구현
    function select(event){
      navigate("/hook")
    }
    function membership(event){
      navigate("/gomembership")
    }

    useEffect(()=>{
      if(moviestatus === 201){
        setConvertlogout("로그아웃하기")
      }else{
        console.log('실패')
      }
    },[moviestatus]
    )
    
    function backlogin(){
      setConvertlogout("로그인하기")
    }
    function testbutton(event){
      setComand(attend.splice(2,1,"hello"))
    }
      
  
   
    return(
      <div>
        <div id='asd'>
          <p id='login' onClick={membership}>
           <span class='membership'>멤버쉽 가입하기</span> 
            <button id='loginmargin' onClick={backlogin}>{convertlogout}</button>
          </p>
          
       
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

        {attend.map((k,m)=>(
            <li>
              {k}
              <button value={k} onClick={changeCommend}>수정</button>
              <button value={k} onClick={removecommand}>삭제</button>
            </li>
          ))}
        
        
        <h3>리뷰달기</h3>

        <form onSubmit={onSubmit}>
          <input ref={nameinput} value={command} type='text' placeholder='clean봇이 감지중입니다' onChange={onChange}>
          </input>
          <button>댓글추가</button>
        </form>

         <select onChange={select}>
          {pagemove.map((item) => (
              <option value={item}>하이</option>
  
          )) 
          }
        </select> 
       <button onClick={testbutton}>실험용버튼</button>
      </div>
    )
  }

export default Movie;