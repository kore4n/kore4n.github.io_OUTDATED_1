import Head from 'next/head'
import LinkText from '../components/link-text'
import LinkTextLocal from '../components/link-text-local'
import PageBody from '../components/page-body'
import Emphasize from '../components/emphasize-text'
import Navbar from '../components/navbar'
import Age from '../components/age'
import Footer from '../components/footer'
import PageMain from '../components/page-main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>
          <Navbar></Navbar>
          <PageMain>
            Hi, I&apos;m Jason Kwan!
            <br></br>
            <br></br>

            I&apos;m a third-year student at the <Emphasize emphasis="University of Western Ontario"/> where
            I am pursuing a bachelor&apos;s degree in <Emphasize emphasis="Computer Science"/>  with a minor
            in <Emphasize emphasis="Game Development"/>. I previously majored in Medical Sciences, but switched after realizing my passion for Computer Science.
            <br></br>
            <br></br>

            In Spring 2019, I was a veterinarian assistant intern at <LinkText link="http://www.weldrickanimalhospital.com/" linkText="Weldrick Animal Hospital"/>.
            For Summer 2023, I&apos;m currently looking for a position as a software engineering intern.
            <br></br>
            <br></br>

            On this website you&apos;ll find some of my <LinkTextLocal link="projects" linkText="projects" /> and my <LinkTextLocal link="jkwanresume.pdf" linkText="resume" />.
            <br></br>
            <br></br>

            Thanks for looking around! :D
            <Age/>
          </PageMain>

          <br></br>
          <br></br>
          <hr className=' w-[60rem] border-t border-white'></hr>
          
        <Footer></Footer>
      </PageBody>

    </div>
  )
}
