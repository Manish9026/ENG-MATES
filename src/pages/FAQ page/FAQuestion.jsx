import React, { useRef } from 'react'
import '../about page/style.scss';
import './style.scss'
import { IoIosArrowDown } from "react-icons/io";

const FAQuestion = () => {
const FAQs=[
  {
    "question": "What programs does the university offer?",
    "answer": "The university offers a wide range of undergraduate and graduate programs, including majors in fields such as Computer Science, Engineering, Business, Arts, and Social Sciences."
  },
  {
    "question": "How do I apply for financial aid?",
    "answer": "You can apply for financial aid by filling out the Free Application for Federal Student Aid (FAFSA) form online. Additionally, the university offers various scholarships and grants, which you can apply for through the university's financial aid office."
  },
  {
    "question": "What is the student-to-faculty ratio?",
    "answer": "The student-to-faculty ratio at our university is 15:1, allowing for personalized attention and a supportive learning environment."
  },
  {
    "question": "Are there internship opportunities available for students?",
    "answer": "Yes, the university has strong partnerships with various industries and organizations, providing students with numerous internship opportunities to gain hands-on experience in their field of study."
  },
  {
    "question": "What resources are available for international students?",
    "answer": "International students have access to a variety of resources, including visa assistance, language support, cultural orientation programs, and a dedicated international student office to help with their academic and social needs."
  },
  {
    "question": "How do I access the university library’s online resources?",
    "answer": "Students can access the university library’s online resources by logging in with their student credentials through the library’s website. This includes access to databases, e-books, and academic journals."
  },
  {
    "question": "What extracurricular activities are available?",
    "answer": "The university offers a wide range of extracurricular activities, including student clubs, sports teams, volunteer organizations, and cultural events. There’s something for everyone to get involved in."
  },
  {
    "question": "Where can I find information about campus housing?",
    "answer": "Information about campus housing, including dormitory options, meal plans, and application procedures, can be found on the university's housing website or by contacting the housing office directly."
  }]
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