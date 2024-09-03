import React, { useEffect, useState } from 'react'
import { students } from '../../data/constant'

const StudentStory = () => {
  const [data, setdata] = useState(students.slice(0, 5))
  const [pagination, setPagination] = useState({
    next: 5,
    skip: 0
  })
  const Card = ({ title = "studentname", paragh = "" }) => {

    return (
      <div className="card">
        <h6 className="title">{title}</h6>
        <p>{paragh.slice(0, 200) + "..."}</p>
      </div>)
  }


  //pagination logic start
  useEffect(() => {
    const length = students.length;
    if (data.length)
      setdata(students.slice(pagination.skip, pagination.next));

    if (pagination.skip < 0) {
      console.log("no record previous");
      setdata(prev => students.slice(0, 5));
      document.getElementById("prev").style.display = "none";

    } else {
      document.getElementById("prev").style.display = "";
    }
    if (pagination.next >= students.length) {
      // console.log("no record next");
      setdata(prev => students.slice(length - 5, length));

      document.getElementById("next").style.display = "none";

    }
    else {
      document.getElementById("next").style.display = "";
    }

  }, [pagination])

  //pagination logic end


  const next = () => {
    if (data.length) {
      setPagination(prev => ({ ...prev, skip: prev.skip + 5, next: prev.next + 5 }))
    } else {
      document.getElementById("next").style.display = "none";
    }

  }
  const prev = () => {
    if (data.length) {

      setPagination(prev => ({ ...prev, skip: prev.skip - 5, next: prev.next - 5 }))
    }
  }
  return (
    <section className="page5 story-page" id='review'>
      <div className="container">
        <span className="heading">
          student's success stories
        </span>

        <span className="content-part">
          {data.map((data, index) => {
            // console.log(data,"data");

            return (
              <Card title={data.name} paragh={data.about} key={index} />
            )
          })}

          <div className="pageNo">
            <span className="box" id='prev' onClick={() => prev()}>

              prev
            </span>
            <span className="box" id='next' onClick={() => next()}>

              next
            </span>

          </div>
        </span>
      </div>
    </section>
  )
}

export default StudentStory