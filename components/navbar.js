import LinkTextLocal from "./link-text-local";
import { useEffect } from "react";

const slightOpacity = 75;

export default function Navbar() {
  // useEffect(() => {
  //   function onScroll() {
  //     var scrollDistance = window.scrollTop;
  //     console.log(scrollDistance);
  //   }

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // });

  let classes="text-main-cyan font-bold text-2xl hover:scale-110 duration-100 hover:text-teal-300";
  let headerTransparentClasses = `fixed pb-6 pt-5 flex justify-between items-center min-w-full px-40 bg-gradient-to-r from-blue-900/${slightOpacity} to-cyan-900/${slightOpacity}`;
  let headerOpaqueClasses = `fixed pb-6 pt-5 flex justify-between items-center min-w-full px-40 bg-gradient-to-r from-blue-900 to-cyan-900 brightness-150`;

    return (
      <header className={headerOpaqueClasses}>
        <span className="text-2xl">
          <LinkTextLocal link="/" linkText="JK"/>
        </span>
        <nav>
          <ul className="flex gap-10">
            <LinkTextLocal link="/" linkText="about" />
            <LinkTextLocal link="/#skills" linkText="skills" />
            <LinkTextLocal link="/#projects" linkText="projects" />
            <a 
              className={classes} href="https://docs.google.com/document/d/1AlARb_llPzyZaCGtmnjThoUqZKI6d7YZ/edit?usp=sharing&ouid=101263568990628764477&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              >resume</a>
            <LinkTextLocal link="/#socials" linkText="contact" />
          </ul>
        </nav>
      </header>
    );
}