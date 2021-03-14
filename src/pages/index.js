import * as React from "react"

import BasicLayout from "../layouts/BasicLayout";
import Profile from "../components/Profile"
import "./index.scss"
import AboutMe from "../components/AboutMe";

//const IndexPage = () => (
export default function Index(){
  return (
    <BasicLayout menuColor="#000">
      <Profile/>
    
      <AboutMe/>
      
    </BasicLayout>
  )
  
}

 

//export default IndexPage
