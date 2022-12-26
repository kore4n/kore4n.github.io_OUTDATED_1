import Head from 'next/head'
import LinkText from '../components/link-text'
import PageBody from '../components/page-body'
import Emphasize from '../components/emphasize-text'
import Age from '../components/age'
import Footer from '../components/footer'
import PageMain from '../components/page-main'
import Blast from '../components/blast'
import Image from 'next/image'
import ContentRow from '../components/content-row'
import Description from '../components/description'
import BlastWord from '../components/blast-word'
import DivideBar from '../components/divide-bar'
import SkillBox from '../components/skill-box'
import Navbar from '../components/navbar'
import ProjectBox from '../components/project-box'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>      
          <span className="fixed pl-24 pt-6 text-2xl">JK</span>  
          <Navbar/>
          <div id="mainHeader" className=' pb-96 pt-48 bg-main-background'>
            <div className=" text-xl text-main-cyan ml-20">
              (an aspiring)
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <BlastWord className="pl-10" word="SOFTWARE"/>
            &nbsp;
            &nbsp;
            &nbsp;
            <BlastWord word="ENGINEER"/>
          </div> 
          <PageMain>
            <ContentRow>
              <Image className="rounded-lg" src="images/jasonselfie.jpg" alt="selfie" width={768/2} height={1024/2} ></Image>
              <Description>
                I&apos;m a <Age/> year-old Canadian developer and third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
                I am pursuing a bachelor&apos;s degree in <Emphasize emphasis="Computer Science"/>  with a minor
                in <Emphasize emphasis="Game Development"/>. I previously majored in Medical Sciences, but switched after realizing my passion for Computer Science.
              </Description>
            </ContentRow>
            <ContentRow>
              <Description>
                In Spring 2019, I was a veterinarian assistant intern at <LinkText link="http://www.weldrickanimalhospital.com/" linkText="Weldrick Animal Hospital"/>.
                
                <span className="font-bold text-orange-500"> Currently, I am seeking internships for Summer 2023.</span>
              </Description>
              <Image className='rounded-lg' src="images/JHospital.jpg" alt="hospital" width={1600/3} height={1200/3} ></Image>
            </ContentRow>
            <DivideBar/>
            <div className="text-center">
              <BlastWord word="Skills"/>
              <div className='grid grid-cols-2 max-w-2xl pt-20 ml-32'>
                <SkillBox title="Technologies"/>
                <SkillBox title="Tools"/>
                <SkillBox title="Design"/>
                <SkillBox title="Professional"/>
              </div>
              <DivideBar/>
              <BlastWord word="Projects"/>
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
      </PageBody>

    </>
  )
}
