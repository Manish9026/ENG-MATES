import React, { useState } from 'react'
import './style.scss'
const Teacher = () => {


    const Card=({title,pargh})=>{

        const [wordIndex,setWordIndex]=useState(200);

        return(
            
            <div className="card">
            <h6>
{title}
            </h6>
            <p>
            {pargh.slice(0,wordIndex)}
            </p>
            <button onClick={()=>setWordIndex(prev=>prev+200)}>show more</button>
        </div>
        )


    }
  return (
    <section className="page5">
        <div className="container">

                <span className="heading">
    about the teacher
                </span>

            <span className="content-part">

    {Array(3).fill(null).map((_,index)=>{
        return(
            <Card key={index} title={"Lorem ipsum dolor sit amet"} pargh={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit commodi ducimus rem a iste, ea saepe! Non corporis officiis, natus cum deserunt dicta inventore odit atque! Voluptas provident saepe maiores temporibus. At amet excepturi praesentium fuga natus, eligendi quaerat nisi et, delectus dolore, deleniti culpa facilis! Voluptates sint officia beatae."}/>
        )
    })}
            </span>
        </div>


    </section>
  )
}

export default Teacher