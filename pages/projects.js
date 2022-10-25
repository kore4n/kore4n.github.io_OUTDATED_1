import Head from 'next/head'
import PageBody from '../components/page-body'
import Footer from '../components/footer';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Jason Kwan</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/scared-hamster.ico" />
      </Head>
      <PageBody>
        In Progress
        <Footer></Footer>
      </PageBody>
    </div>
  );
}