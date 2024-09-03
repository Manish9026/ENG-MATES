import React, { useRef } from 'react'
import '../about page/style.scss';
import './style.scss'
import { IoIosArrowDown } from "react-icons/io";
import { FAQs } from '../../data/constant';
const FAQuestion = () => {

  const Card=({ques,ans})=>{
    const ansRef=useRef(null);

    const onOpen=()=>{
      if( ansRef.current.style.display=="flex"){
        ansRef.current.style.display="none"

      }else{
      ansRef.current.style.display="flex"

      }
      console.log(ansRef.current.style.display);
      
    }
    return(
      <span className="card">
       <span className='ques' onClick={()=>onOpen()}><h6>{ques}</h6> <span className='arrowIcon'><IoIosArrowDown /></span> </span>
       <span ref={ansRef} className='ans'>{ans}</span>
      </span>
    )

  }
  return (
    <section className="page5 FAQs-page" id='FAQs'>
        <div className="container">
    <span className="heading">
      FAQs
    </span>
    <span className="content-part1" >

{
  FAQs.map((data,index)=>{
    return (
      <Card key={index} ques={data.question} ans={data.answer}/>
    )
  })
}

    </span>
        </div>
    </section>
  )
}

export default FAQuestion