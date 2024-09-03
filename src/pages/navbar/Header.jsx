import React from 'react'
import './style.scss';
import { LuMenu } from "react-icons/lu";
import logo from '../../assects/logo.jpeg'
import { Link } from "react-scroll";

const navLink=[['home','Home'],["benefit","Benefits"],['curriculum','curriculum'],['review','Reviews'],['FAQs','FAQS']]
const Header = () => {

  const mobNavHandler=()=>{
 const navStyle=document.getElementById("mobNav")
 if(navStyle.style.display=="flex"){
  navStyle.style.display="none"
 }
 else{
  navStyle.style.display="flex";

 }
  }
  return (
    <section className="navbar">
        <span className="logo-section">
            <img src={logo} alt="" />
        </span>
        <ul className="nav-title">
      {
        navLink.map((link)=>{
          return(
            <li className='link' ><Link activeClass="active"
            to={link[0]}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            > {link[1]}</Link></li>
          )
        })
      }
        <a href='https://web.whatsapp.com/' target='/'  className='whatsapp'>whatsapp</a>
        </ul>

        <ul className="mob-menu ">
          <a href='https://web.whatsapp.com/' target='/' className="whatsapp">
            whatsapp
          </a>
          <li className="menuIcon" onClick={()=>mobNavHandler()}>
          <LuMenu />

          </li>
          <span className="mob-nav" id='mobNav'>
          {
        navLink.map((link,id)=>{
          return(
            <li key={id} >
              <Link activeClass="active"
            to={link[0]}
            onClick={()=>mobNavHandler()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}> {link[1]}</Link></li>
          )
        })
      }
          </span>
        </ul>
    </section>
  )
}

export default Header