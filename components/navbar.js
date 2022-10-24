import LinkTextLocal from "./link-text-local";


export default function Navbar(props) {
    return (
      <header className='pb-5 flex justify-between items-center'>
        <span className="text-4xl">
          <LinkTextLocal link="" linkText="jkwan" />
        </span>

        <nav className="">
          <ul className=" flex gap-5">
            <LinkTextLocal link="" linkText="about" />
            &nbsp;
            <a className="text-main-blue hover:scale-110" href="https://docs.google.com/document/d/1AlARb_llPzyZaCGtmnjThoUqZKI6d7YZ/edit?usp=sharing&ouid=101263568990628764477&rtpof=true&sd=true">resume</a>
            &nbsp;
            <LinkTextLocal link="projects" linkText="projects" />
          </ul>
        </nav>
      </header>
    );
  }