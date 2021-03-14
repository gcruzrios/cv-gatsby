import * as React from "react"
import {Container } from "react-bootstrap";
import ListSkills from "../components/ListSkills";
import BasicLayout from "../layouts/BasicLayout";
import { frontendSkills, frontendSkillsColors, backendSkills, backendSkillsColors, systemsSkillsColors, systemsSkills } from "../utils/skills"
import "./skills.scss"


  

export default function Index(){
  return (
    <BasicLayout menuColor="#000">
      
    <Container className="skills">
        
      <div className="skills__block">
        <h2>FrontEnd</h2>
        
        <ListSkills skills={frontendSkills}  colors={frontendSkillsColors}/>
      </div>
      <div className="skills__block">
        <h2>BackEnd</h2>
        
        <ListSkills skills={backendSkills}  colors={backendSkillsColors}/>
        </div>   
      <div className="skills__block">
        <h2>Sistemas</h2>
        
        <ListSkills skills={systemsSkills}  colors={systemsSkillsColors}/>
      </div>
    </Container>
      
    </BasicLayout>
  )
  
}
