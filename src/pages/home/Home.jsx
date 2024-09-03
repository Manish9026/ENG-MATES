import React, { useEffect, useState } from 'react'
import './style.scss';
import video from '../../assects/home.mp4'
import { FaRegClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BiSolidOffer } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";



{/* <SlCalender /> */}
// FaRegClock

const cardData=[[<SlCalender/>,"batch Start","every monday of the week"],[<FaRegClock/>,"batch timing","1.5Hrs/Mon-Fir 3Hrs/Saturday"],[<TfiWorld />,"duration of the course","3months 4months"],[<BiSolidOffer />,"our course offerings","basic/advance public speaking"]]

const Home = () => {

  const [timer,setTimer]=useState({
    sec:0,
    min:0,hour:0,
    day:0
  });

  const CountDown=()=>{

    useEffect(()=>{
      let currentTime;
      const timeOut=setInterval(() => {
        currentTime=new Date();
        setTimer(prev=>({...prev,sec:currentTime.getSeconds(),min:currentTime.getMinutes(),day:currentTime.getDay(),hour:currentTime.getHours()}))

        
      }, 1000);
      return()=>clearInterval(timeOut)
    },[])
    return(
      <div className="home-timer">
      <div className="card">
        <div className="box">{timer.day} </div>
        <p className="title">
          days
        </p>
      </div>
      <div className="card">
        <div className="box">
          {timer.hour}
        </div>
        <p className="title">
          hours
        </p>
      </div>
      <div className="card">
        <div className="box">{timer.min}</div>
        <p className="title">
          mins
        </p>
      </div>
      <div className="card">
        <div className="box">{timer.sec}</div>
        <p className="title">
          secs
        </p>
      </div>
     </div>
    )
  }
  return (

    <section className="home-section" id="home">
      <div className="home-landing">
      <div className="part1">

<ul className="title">
   <li className='h-title'>
    english speaking institude in tilak nagar
   </li>
   <li className='sub-title'>
    delhi's #1 english speaking institute with proven track record
    </li> 
</ul>
<ul className="h-btn">
    <li className='btn'>call for connsultation </li>
    <li className='btn-sub-title'>
      100000+ student enrolled till date
    </li>
    
</ul>
<CountDown/>
        </div>
        <div className="part2">
 <video src={video} controls></video>
        </div>
      </div>
     

    <div className="home-offer">
    
    {
      cardData.map((data,index)=>{
        return(
          <ul className="card" key={index}>
          <li>{data[0]}</li>
          <li>{data[1]}</li>
          <li>{data[2]}</li>
    
        </ul>
        )

      })
    }

    </div>
     

    </section>
  )
}

export default Home