import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'
import Links from '../components/links'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <div>
        Ok
      </div>
      {/* <div className='flex-col bg-main-background min-h-screen'>
        <div>
          Header
        </div>
        <div className=' ml-20 py-10'>
          Hi, I'm Jason Kwan!

          I'm a third-year student at the University of Toronto where
          I am pursuing a bachelor's degree in Computer Science with a minor
          in Game Development.

          I've previously worked at <a className=' text-main-blue' href="http://www.weldrickanimalhospital.com/">Weldrick Animal Hospital</a> as a vet assistant intern,
          and studied Medical Science, but switched after
          realizing computer science was my passion.

          On this website you'll find some of my projects and my resume.

          Thanks for looking around! :)
        </div>
        <Links/>
      </div> */}
    </div>
  )
}
