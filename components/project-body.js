import Head from 'next/head'
import React from "react";

import PageBody from '../components/page-body'
import Footer from '../components/footer'
import PageMain from '../components/page-main'
import Image from 'next/image'
import Navbar from '../components/navbar'
import TinyDivideBar from '../components/tiny-divide-bar'
import GitHubLogo from './github';

import GenerateCanvas from '../components/threejs/generate-canvas';

export default function ProjectBody({name, description, imgLink, githubLink, imgWidth, imgHeight}) {
    return (
        <>
            <Head>
                <title>{name}</title>
                <meta name={name} content={name} />
                <link rel="icon" href="/scared-hamster.ico" />
            </Head>
                <main>
                    <PageBody >      
                        <PageMain>
                            <TinyDivideBar/>
                            <div className="flex flex-row min-h-[60vh]">
                                <div className="flex-none max-w-xl pl-14 grid place-items-center">
                                    <div className="pt-24 text-2xl font-bold">
                                        {name}
                                    </div>
                                    <span>
                                        {description}
                                    </span>
                                    <div>
                                        View on Github
                                        <GitHubLogo classes="fill-gray-400 transition hover:scale-110 hover:fill-main-cyan duration-100 inline-block mx-2" link={githubLink}/>
                                    </div>
    
                                </div>
                                <div className="flex-auto grid place-items-center">
                                    <Image className="rounded-t-lg" src={imgLink} alt="Missing Picture" width={imgWidth} height={imgHeight}/>
                                </div>
                            </div>
                        </PageMain>
                        <Footer/>
                        <Navbar/>
                    </PageBody>
                </main>
                <GenerateCanvas/>
        </>
    );
}