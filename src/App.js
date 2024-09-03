import React from "react";
import Header from "./pages/navbar/Header";
import Home from "./pages/home/Home";
import WhyChoose from "./pages/why page/WhyChoose";
import Benefit from "./pages/benifit page/Benefit";
import Curriculam from "./pages/curriculam page/Curriculam";
import Teacher from "./pages/about page/Teacher";
import StudentStory from "./pages/about page/StudentStory";
import FAQuestion from "./pages/FAQ page/FAQuestion";

export const App = () => {


  return (
    <div className="app" style={{gap:5}}>
      <Header/>
      <Home/>
      <WhyChoose/>
      <Benefit/>
      <Curriculam/>
      <Teacher/>
      <StudentStory/>
      <FAQuestion/>
    </div>
  );
};
