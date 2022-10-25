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
        <article className="grid h-full">
          <div className=' h-24 border'>
          </div>
          <div className=' h-24 border'>
          </div>
          <div className=' h-24 border'>
          </div>
          <div className=' h-24 border'>
          </div>
        </article>
        <article>
        </article>
        <article>
        </article>
        <article>
        </article>
      </PageBody>
    </div>
  );
}