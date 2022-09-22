import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Hi, I'm Jesse Maltese!


        I'm a third-year student at the University of Toronto where
        I am pursuing a bachelor's degree in Mathematics with minors
        in Computer Science and Philosophy with a heavy focus on logic.

        In Summer 2021, I was a full stack development intern at Kontrol Energy.
        During Summer 2022, I will be working at Hubspot in Boston, as a software engineering intern.

        On this website you'll find some of my projects and my resume.
        Occasionally I do some writing too. You can also check out
        my simple chord + scale search.


        Thanks for looking around! :)
      </div>
    </div>
  )
}
