import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'
import Links from '../components/links'
import LinkText from '../components/link-text'
import LinkTextLocal from '../components/link-text-local'
import PageBody from '../components/page-body'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>
        <div className=' ml-20 py-16'>
          <div className=' text-4xl'>
            <LinkTextLocal link="" linkText="jkwan" />
          </div>
          <br></br>

          <div className=' w-80 border-b pb-5 border-white'>
            <LinkTextLocal link="" linkText="about" />
            &nbsp;
            <LinkTextLocal link="jkwanresume.pdf" linkText="resume" />
            &nbsp;
            <LinkTextLocal link="projects" linkText="projects" />
          </div>
          <br></br>
          <div className=' w-1/2'>

            Hi, I&apos;m Jason Kwan!
            <br></br>
            <br></br>

            I&apos;m a third-year student at the University of Western Ontario where
            I am pursuing a bachelor&apos;s degree in Computer Science with a minor
            in Game Development. I previously majored in Medical Sciences, but switched after realizing my passion for Computer Science.
            <br></br>
            <br></br>

            In Spring 2019, I was a veterinarian assistant intern at <LinkText link="http://www.weldrickanimalhospital.com/" linkText="Weldrick Animal Hospital"/>.
            For Summer 2023, I&apos;m currently looking for a position as a software engineering intern.
            <br></br>
            <br></br>

            On this website you&apos;ll find some of my projects and my resume.
            <br></br>
            <br></br>

            Thanks for looking around! :&#41;
          </div>

          <br></br>
          <br></br>
          <hr className=' w-[60rem] border-t border-white'></hr>
          
          <div>
            Jason Kwan - 2022
            
            <br></br>
            You can find me on Github, LinkedIn, or Email Me!
          </div>
          <Links/>
        </div>
      </PageBody>
    </div>
  )
}
