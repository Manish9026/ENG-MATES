import React, { useEffect, useState } from 'react'

const students = [
  {
    "name": "John Doe",
    "about": "John Doe is a 20-year-old Computer Science student with a profound interest in artificial intelligence (AI). His thesis focuses on the ethical implications of AI in decision-making processes."
  },
  {
    "name": "Jane Smith",
    "about": "Jane Smith is a 21-year-old Biology major fascinated by genetics. She is researching CRISPR technology and its potential to cure genetic disorders."
  },
  {
    "name": "Michael Johnson",
    "about": "Michael Johnson, a 22-year-old Engineering student, is passionate about renewable energy. His senior project involves designing a sustainable energy system for rural communities."
  },
  {
    "name": "Emily Davis",
    "about": "Emily Davis is a 19-year-old Mathematics major with a love for cryptography. She is working on a project that explores the security of quantum computing."
  },
  {
    "name": "David Wilson",
    "about": "David Wilson, 23, is a Political Science student with an interest in international relations. He is writing his thesis on the impact of social media on global politics."
  },
  {
    "name": "Sophia Martinez",
    "about": "Sophia Martinez is a 20-year-old Psychology major studying cognitive behavioral therapy. Her research focuses on the treatment of anxiety disorders in adolescents."
  },
  {
    "name": "James Brown",
    "about": "James Brown, 21, is an Economics student analyzing the effects of automation on job markets. He aims to contribute to policies that mitigate unemployment caused by technological advancements."
  },
  {
    "name": "Olivia Garcia",
    "about": "Olivia Garcia is a 22-year-old Art History major exploring the influence of digital media on contemporary art. Her thesis examines how social media platforms are shaping artistic expression."
  },
  {
    "name": "William Jones",
    "about": "William Jones, 20, is a Physics student researching dark matter. He hopes to contribute to the understanding of the universe's most mysterious components."
  },
  {
    "name": "Ava Hernandez",
    "about": "Ava Hernandez is a 21-year-old Environmental Science major focused on climate change. Her project involves studying the impact of deforestation on local ecosystems."
  },
  {
    "name": "Ethan Clark",
    "about": "Ethan Clark, 22, is a Computer Engineering student working on developing more efficient algorithms for data processing. He is particularly interested in parallel computing."
  },
  {
    "name": "Isabella Lee",
    "about": "Isabella Lee is a 20-year-old Literature major with a passion for postmodern novels. She is writing a comparative analysis of narrative techniques in contemporary literature."
  },
  {
    "name": "Alexander Perez",
    "about": "Alexander Perez, 23, is a Sociology student studying urban development. His research focuses on the effects of gentrification in major cities."
  },
  {
    "name": "Mia Thomas",
    "about": "Mia Thomas is a 19-year-old Nursing student dedicated to improving patient care. She is working on a project that examines the impact of nurse-patient ratios on healthcare outcomes."
  },
  {
    "name": "Lucas White",
    "about": "Lucas White, 21, is an Architecture student designing sustainable buildings. His senior project involves creating eco-friendly housing for low-income communities."
  },
  {
    "name": "Amelia Gonzalez",
    "about": "Amelia Gonzalez is a 22-year-old Music major specializing in composition. She is composing a symphony that blends classical and modern musical elements."
  },
  {
    "name": "Benjamin Taylor",
    "about": "Benjamin Taylor, 20, is a Chemistry student researching new materials for energy storage. His thesis explores the potential of nanomaterials in improving battery efficiency."
  },
  {
    "name": "Charlotte Anderson",
    "about": "Charlotte Anderson is a 21-year-old Philosophy major exploring existentialism. She is writing a thesis on the relevance of existential thought in contemporary society."
  },
  {
    "name": "Henry Moore",
    "about": "Henry Moore, 22, is a Business Administration student with a focus on entrepreneurship. He is developing a business plan for a startup that uses AI to improve customer service."
  },
  {
    "name": "Grace Walker",
    "about": "Grace Walker is a 20-year-old History major researching the impact of World War II on modern geopolitics. She aims to understand how historical events shape current global relations."
  },
  {
    "name": "Daniel Hall",
    "about": "Daniel Hall, 21, is a Mechanical Engineering student designing robotic systems. His senior project involves creating a robot that can assist with search and rescue operations."
  },
  {
    "name": "Ella Adams",
    "about": "Ella Adams is a 19-year-old Journalism major focused on investigative reporting. She is working on a series of articles that expose corruption in local governments."
  },
  {
    "name": "Samuel Thompson",
    "about": "Samuel Thompson, 22, is a Computer Science student with a passion for cybersecurity. He is researching new methods for protecting sensitive data from cyber threats."
  },
  {
    "name": "Lily Wright",
    "about": "Lily Wright is a 21-year-old Anthropology major studying ancient civilizations. Her thesis explores the social structures of the Maya and their influence on modern cultures."
  }
]
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