import React from 'react'
import './style.scss'
import { benefitImageUrl } from '../../assects/benefit/imageUrl'
const Benefit = () => {
  return (
    <div className='page3' id='benefit'>
        <div className="container">


            <div className="heading">
                benefits you will gain
            </div>

            <div className="content-part">
                {
                    benefitImageUrl.map((path,id)=>{
                        return(
                            <div className="card" key={id}>
                    <span className="img">
                        <img src={path} alt="" />
                    </span>
                    <p className="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.
                    </p>
                </div>
                        )
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default Benefit