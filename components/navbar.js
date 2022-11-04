import LinkTextLocal from "./link-text-local";


export default function Navbar() {
  let classes="text-main-cyan font-bold text-2xl hover:scale-110 duration-100"

    return (
      <header className='pb-5 flex justify-between items-center'>
        <span className="text-7xl">
          {/* <LinkTextLocal link="/" linkText="jkwan" /> */}
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
            <a 
              className={classes}
              href="https://kore4n.github.io/#socials">
              contact
            </a>
          </ul>
        </nav>
      </header>
    );
}