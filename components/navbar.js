import LinkTextLocal from "./link-text-local";


export default function Navbar() {
  let classes="text-main-cyan font-bold text-2xl hover:scale-110 duration-100 hover:text-teal-300"

    return (
      <header className='pb-6 pt-5 flex justify-between items-center px-40 bg-gradient-to-r from-blue-900 to-cyan-900'>
        <span className="text-7xl">
        </span>
        <nav>
          <ul className="flex gap-10">
            <LinkTextLocal className="" link="/" linkText="about" />
            <a 
              className={classes} href="https://docs.google.com/document/d/1AlARb_llPzyZaCGtmnjThoUqZKI6d7YZ/edit?usp=sharing&ouid=101263568990628764477&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              >resume</a>
            <LinkTextLocal link="projects" linkText="projects" />
            <LinkTextLocal link="/#socials" linkText="contact" />
          </ul>
        </nav>
      </header>
    );
}