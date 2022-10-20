import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

export default function Socials(props){
    return (
        <div className=' '>
          {/* <li>
            <Logo link="https://linkedin.com/in/jason-kwan-809a071b1" imagePath="/images/linkedin.svg" alt="Linkedin Logo" />
          </li>
          <li>
            <Logo link="mailto:kwan.jason2001@gmail.com" imagePath="/images/gmail.svg" alt="Gmail Logo" />
          </li>
          <li>
            <Logo link="https://github.com/kore4n" imagePath="/images/github.svg" alt="Github Logo" />
          </li> */}


          <Logo link="https://linkedin.com/in/jason-kwan-809a071b1" imagePath="/images/linkedin.svg" alt="Linkedin Logo" />
          <Logo link="mailto:kwan.jason2001@gmail.com" imagePath="/images/gmail.svg" alt="Gmail Logo" />
          <Logo link="https://github.com/kore4n" imagePath="/images/github.svg" alt="Github Logo" />

        </div>
    )
}