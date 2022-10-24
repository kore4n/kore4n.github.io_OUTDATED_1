import LinkedinLogo from "./linkedin";
import GithubLogo from '../components/github'
import Email from "./email";

export default function Socials(props){
    return (
        <div className=' '>
          {/* <Logo link="https://linkedin.com/in/jason-kwan-809a071b1" imagePath="/images/linkedin.svg" alt="Linkedin Logo" /> */}
          {/* <Logo link="mailto:kwan.jason2001@gmail.com" imagePath="/images/gmail.svg" alt="Gmail Logo" /> */}
          {/* <Logo link="https://github.com/kore4n" imagePath="/images/github.svg" alt="Github Logo" /> */}
          <GithubLogo classes={props.classes} link="https://github.com/kore4n"/>
          <LinkedinLogo classes={props.classes} link="https://linkedin.com/in/jason-kwan-809a071b1"/>
          <Email classes={props.classes} link="mailto:kwan.jason2001@gmail.com"/>
        </div>
    )
}