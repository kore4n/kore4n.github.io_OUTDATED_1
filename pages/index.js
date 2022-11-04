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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>        
          <PageMain>
            <div className=' py-20'>
              <div className=" text-xl text-main-cyan ml-20">
                (a little about me)
              </div>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <Blast letter="S"/>
              <Blast letter="O"/>
              <Blast letter="F"/>
              <Blast letter="T"/>
              <Blast letter="W"/>
              <Blast letter="A"/>
              <Blast letter="R"/>
              <Blast letter="E"/>
              &nbsp;
              &nbsp;
              &nbsp;
              <Blast letter="E"/>
              <Blast letter="N"/>
              <Blast letter="G"/>
              <Blast letter="I"/>
              <Blast letter="N"/>
              <Blast letter="E"/>
              <Blast letter="E"/>
              <Blast letter="R"/>
            </div> 
            <ContentRow>
              <Image className="rounded-lg" src="images/jasonselfie.jpg" alt="selfie" width={768/2} height={1024/2} ></Image>
              <Description>
                I&apos;m a <Age/> year-old developer and third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
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
            <div className='grid place-items-center pt-24 pb-10'>
              <Description className="">
                Thanks for looking around! :D
              </Description>
            </div>
          </PageMain>
          <Footer/>
      </PageBody>

    </div>
  )
}
