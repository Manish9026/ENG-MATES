import React from 'react'
import image from '../../assects/image1.jpg'
import './style.scss'
const WhyChoose = () => {
  return (
    <section className='page2'>

        <div className="container">
        <div className="heading">
        why choose us?
        </div>

        <div className="content-part">

           {
            Array(5).fill(null).map((_,id)=>{
                return(
                    <div className="card" key={id}>
                    <span className="img">
                        <img src={image} alt="" />
                    </span>
                    <span className="content">
                        <p className='title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, neque.</p>
                        <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque eveniet possimus quae ea in autem atque provident odio reiciendis, eaque odit iure quo.</p>
                    </span>
                </div>
                )
            })
           }
        </div>
        </div>
       

    </section>
  )
}

export default WhyChoose