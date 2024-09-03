import React from 'react'
import './style.scss'
import { days } from '../../data/constant'

const Curriculam = () => {
  return (
    <section className="page4" id='curriculum'>

        <div className="container">
            <div className="heading">
    Curriculam for the course
            </div>
            <div className="content-part">

                <ul className="tracker-nav">
                    <li> go smart</li>
                    <li> go public</li>
                    <li> go classic</li>
                </ul>

                <span className="content">


    {
        days.map((day,index)=>{

            return(
                 <ul className="card" key={index}>
                        <li className="box1">
                            <p>day{day[0]+1}</p>
                            <p>{day[1]}</p>
                        </li>
                        <li className="box2">
                            <h6>Lorem ipsum dolor sit amet consectetur?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deleniti odio minima repellendus. Amet quisquam delectus eligendi alias, reprehenderit odio?</p>
                        </li>
                    </ul>
            )
        })
    }
                   
                </span>

            </div>
        </div>
    </section>
  )
}

export default Curriculam