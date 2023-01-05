import Head from 'next/head'
import React from "react";
import Image from 'next/image'

import LinkText from '../components/link-text'
import PageBody from '../components/page-body'
import Emphasize from '../components/emphasize-text'
import Age from '../components/age'
import Footer from '../components/footer'
import PageMain from '../components/page-main'
import ContentRow from '../components/content-row'
import Description from '../components/description'
import BlastWord from '../components/blast-word'
import SkillBox from '../components/skill-box'
import Navbar from '../components/navbar'
import ProjectBox from '../components/project-box'
import AnimateInBox from '../components/animate-in-box'
import TinyDivideBar from '../components/tiny-divide-bar'

import GenerateCanvas from '../components/threejs/generate-canvas';
import TechnologyLogo from '../components/technology';
import ToolsLogo from '../components/tools-logo';
import DesignLogo from '../components/design-logo';
import ProfessionalLogo from '../components/professional-logo';


export default function Home() {
    return (
        <>
            <Head>
                <title>Jason Kwan</title>
                <meta name="Main Page" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
                <link rel="icon" href="/scared-hamster.ico" />
            </Head>
              <main>
                  <PageBody >      
                      <div id="mainHeader" className='pb-96 pt-48 bg-main-background shadow-2xl shadow-black'>
                          <div className="text-xl text-main-cyan ml-20">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          (an aspiring)
                          </div>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp; 
                          <span className="pl-28">
                          <BlastWord word="SOFTWARE"/>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <BlastWord word="ENGINEER"/>
                          </span>
                      </div> 
                      <PageMain>
                          <div className="text-center pt-10">
                            <span id="about"/>
                            <BlastWord word="About"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <BlastWord word="Me"/>
                          </div>
                          <TinyDivideBar/>
                          <ContentRow>
                          <AnimateInBox direction="right">
                              <Image className="rounded-lg" src="images/jasonselfie.jpg" alt="selfie" width={768/2} height={1024/2} ></Image>
                          </AnimateInBox>
                          <AnimateInBox direction="left">
                              <Description>
                                I&apos;m Jason and I&apos;m a <Age/> year-old Canadian developer and third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
                                I am pursuing a bachelor&apos;s degree in <Emphasize emphasis="Computer Science"/>  with a minor
                                in <Emphasize emphasis="Game Development"/>. I previously majored in Medical Sciences, but switched after realizing my passion for Computer Science.
                              </Description>
                          </AnimateInBox>
                          </ContentRow>

                          <ContentRow>
                          <AnimateInBox direction="right">
                              <Description>
                                In Spring 2019, I was a veterinarian assistant intern at <LinkText link="http://www.weldrickanimalhospital.com/" linkText="Weldrick Animal Hospital"/>.
                              
                              <span className="font-bold text-orange-500"> Currently, I am seeking internships for Summer 2023.</span>
                              </Description>
                          </AnimateInBox>
                          <AnimateInBox direction="left">
                              <Image className='rounded-lg' src="images/JHospital.jpg" alt="hospital" width={1600/3} height={1200/3} ></Image>
                          </AnimateInBox>
                          </ContentRow>

                          <span id="skills"/>
                          {/* <DivideBar/> */}
                          <div className="text-center">
                            <BlastWord word="Skills"/>
                            <TinyDivideBar/>
                            <div className='grid grid-cols-2 max-w-2xl pt-20 m-auto'>
                                <SkillBox logo={<TechnologyLogo/>} title="Technologies" description="I am fluent in using React, Next.js, Tailwind CSS, and JavaFX!"/>
                                <SkillBox logo={<ToolsLogo/>} title="Tools" description="I am proficient in Git/GitHub/BitBucket, Unix/Linux, Oracle Cloud (VMs), Jira, Confluence, Slack, and Trello."/>
                                <SkillBox logo={<DesignLogo/>} title="Design" description="I am comfortable using basic Photoshop, Microsoft Office, Blender and Balsamiq Wireframes!"/>
                                <SkillBox logo={<ProfessionalLogo/>} title="Professional" description="I am a fast learner, a critical thinker, and a leader with 7+ years of experience in 140 Aurora Air Cadets w/ leadership in software projects."/>
                            </div>
                            <div className="py-10"></div>
                            <span id="projects"/>
                            {/* <DivideBar/> */}
                            <BlastWord word="Projects"/>
                            <TinyDivideBar/>
                            <div className='grid grid-cols-3 max-w-6xl pt-20 m-auto'>
                                <ProjectBox name="WesternNav" imgLink="images/western-nav/WesternNavLogo.PNG" pageLink="/western-nav" 
                                description="GIS app that allows users to navigate between locations on Western's campus."/>
                                <ProjectBox name="Portfolio Website" imgLink="images/portfolio-website/Portfolio.PNG" pageLink="/portfolio-website"
                                description="Portfolio to introduce myself, skills, and allow users to explore previous work."/>
                                <ProjectBox name="Election Console App" imgLink="images/election/election_db.png" pageLink="/election"
                                description="Simple election simulator through console app. "/>
                                {/* <ProjectBox/>
                                <ProjectBox/>
                                <ProjectBox/> */}
                            </div>
                          </div>
                          
                          <div className='grid place-items-center pt-24 pb-10'>
                          <span className="font-bold">
                            <Description>
                                Thanks for looking around! :D
                            </Description>
                          </span>
                          </div>
                      </PageMain>
                      <Footer/>
                      <Navbar type="default"/>
                  </PageBody>
              </main>
            {/* </ThemeContext.Provider> */}
            <GenerateCanvas/>
        </>
    );
}