import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

export default function Links(props){
    return (
        <div className=' grid-cols-3'>
          <Logo link="https://linkedin.com/in/jason-kwan-809a071b1" imagePath="/images/linkedin.svg" alt="Linkedin Logo" />
          <Logo link="mailto:kwan.jason2001@gmail.com" imagePath="/images/gmail.svg" alt="Github Logo" />
          <Logo link="https://github.com/kore4n" imagePath="/images/github.svg" alt="Github Logo" />
        </div>
    )
}