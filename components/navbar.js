import LinkTextLocal from "./link-text-local";

export function RegularContent() {
  return (
    <>
      <LinkTextLocal link="/#about" linkText="about" />
      <LinkTextLocal link="/#skills" linkText="skills" />
      <LinkTextLocal link="/#projects" linkText="projects" />
      <a 
        className="text-main-cyan font-bold text-2xl hover:scale-110 duration-100 hover:text-teal-300" href="https://docs.google.com/document/d/1AlARb_llPzyZaCGtmnjThoUqZKI6d7YZ/edit?usp=sharing&ouid=101263568990628764477&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        >resume</a>
      <LinkTextLocal link="/#socials" linkText="contact" />
    </>
  );
}

export function BackContent() {
  return (
    <>
      <LinkTextLocal link="/#projects" linkText="back to projects" />
    </>
  );
}

export default function Navbar({type}) {
  let body = <RegularContent/>;

  if (type != "default") { body = <BackContent/> }

  return (
    <header className="fixed pb-6 pt-5 flex justify-between items-center w-[80rem] px-20 bg-gradient-to-r from-blue-900 to-cyan-900 brightness-150 shadow-lg">
      <span className="text-2xl">
        <LinkTextLocal link="/" linkText="JK"/>
      </span>
      <nav>
        <ul className="flex gap-10 ">
          {body}
        </ul>
      </nav>
    </header>
  );
}