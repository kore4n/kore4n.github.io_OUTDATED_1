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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <PageMain>
            <div className=" text-xl text-main-cyan ml-20">
              (a little about me)
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Blast letter="F"/>
            <Blast letter="O"/>
            <Blast letter="R"/>
            <Blast letter="M"/>
            <Blast letter="E"/>
            <Blast letter="R"/>
            &nbsp;
            &nbsp;
            &nbsp;
            <Blast letter="C"/>
            <Blast letter="H"/>
            <Blast letter="I"/>
            <Blast letter="L"/>
            <Blast letter="D"/>
            <Blast>
              Former Child
            </Blast>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ContentRow>
              <Image className='rounded-3xl' src="images/WesternUniversity.png" alt="university" width={400} height={240} ></Image>
              <Description>
                I&apos;m a <Age/> year-old developer and third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
                I am pursuing a bachelor&apos;s degree in <Emphasize emphasis="Computer Science"/>  with a minor
                in <Emphasize emphasis="Game Development"/>. I previously majored in Medical Sciences, but switched after realizing my passion for Computer Science.
              </Description>
            </ContentRow>
            <br></br>
            <br></br>
            <br></br>
            <ContentRow>
              <Description>
                In Spring 2019, I was a veterinarian assistant intern at <LinkText link="http://www.weldrickanimalhospital.com/" linkText="Weldrick Animal Hospital"/>.
                For Summer 2023, I&apos;m currently looking for a position as a software engineering intern.
              </Description>
              <Image className='rounded-3xl' src="images/JHospital.jpg" alt="hospital" width={400} height={240} ></Image>
            </ContentRow>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <div className='grid place-items-center'>
              <Description className="">
                Thanks for looking around! :D
              </Description>
            </div>
            
          </PageMain>

          <br></br>
          <br></br>          
          <Footer></Footer>
      </PageBody>

    </div>
  )
}
