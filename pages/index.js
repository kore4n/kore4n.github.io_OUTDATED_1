import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'
import Links from '../components/links'
import Link from 'next/link'
import LinkText from '../components/link-text'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <div className='bg-main-background min-h-screen'>
        <div className=' ml-20 py-10'>
          Empty
          <div>
            The Header
          </div>
          <div>
            {/* <LinkText link="http://www.weldrickanimalhospital.com/" linkText = "Weldrick Animal Hospital"/> */}
            I have previously worked at weldrick animal hospital as a vet assistant intern.
          </div>
        </div>
        <Links/>
      </div>
    </div>
  )
}
