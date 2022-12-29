import Head from 'next/head'
import LinkText from '../components/link-text'
import PageBody from '../components/page-body'
import Emphasize from '../components/emphasize-text'
import Age from '../components/age'
import Footer from '../components/footer'
import PageMain from '../components/page-main'
import Image from 'next/image'
import ContentRow from '../components/content-row'
import Description from '../components/description'
import BlastWord from '../components/blast-word'
import DivideBar from '../components/divide-bar'
import SkillBox from '../components/skill-box'
import Navbar from '../components/navbar'
import ProjectBox from '../components/project-box'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import AnimateInBox from '../components/box'
import TinyDivideBar from '../components/tiny-divide-bar'

// const boxVariant = {
//   visible: { 
//     x: 200,
//     opacity: 1, 
//     // scale: 1, 
//     transition: 
//     { 
//       duration: 0.5 
//     }
//   },
//   hidden: { 
//     x: 100,
//     opacity: 0, 
    
//     // scale: 0
//   }
// };

// const Box = ({ num }) => {

//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       className="box"
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//     >
//       <span className=' bg-red-700 text-center'>Box {num} </span>
//     </motion.div>
//   );
// };

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>      
          <div id="mainHeader" className=' pb-96 pt-48 bg-main-background'>
            <div className=" text-xl text-main-cyan ml-20">
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
              <BlastWord word="About"/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BlastWord word="Me"/>
            </div>
            <ContentRow>
              <AnimateInBox direction="right">
                <Image className="rounded-lg" src="images/jasonselfie.jpg" alt="selfie" width={768/2} height={1024/2} ></Image>
              </AnimateInBox>
              <AnimateInBox direction="left">
                <Description>
                  I&apos;m a <Age/> year-old Canadian developer and third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
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
              <div className='grid grid-cols-2 max-w-2xl pt-20 ml-32'>
                <SkillBox title="Technologies" description="I am fluent in using React, Next.js, Tailwind CSS, and JavaFX!"/>
                <SkillBox title="Tools" description="I am proficient in Git/GitHub/BitBucket, Unix/Linux, Oracle Cloud (VMs), Jira, Confluence, Slack, and Trello."/>
                <SkillBox title="Design" description="I am comfortable using basic Photoshop, Microsoft Office, Blender and Balsamiq Wireframes!"/>
                <SkillBox title="Professional" description="I am a fast learner, a critical thinker, and a leader with 7+ years of experience in 140 Aurora Air Cadets w/ leadership in software projects."/>
              </div>
              <div className="py-10"></div>
              <span id="projects"/>
              {/* <DivideBar/> */}
              <BlastWord word="Projects"/>
              <TinyDivideBar/>
              <div className='grid grid-cols-3 max-w-6xl pt-20 m-auto'>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
              </div>
              <div>

              </div>
            </div>
            
            <div className='grid place-items-center pt-24 pb-10'>
              <Description className="">
                Thanks for looking around! :D
              </Description>
            </div>
          </PageMain>
          <Footer/>
          <Navbar/>
      </PageBody>

    </>
  )
}
