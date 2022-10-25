import LinkedinLogo from "./linkedin";
import GithubLogo from './github'
import Email from "./email";

export default function Socials(){
  let classes = "fill-gray-400 transition hover:scale-110 hover:fill-main-cyan duration-100 inline-block mx-2"

    return (
        <div id="socials">
          <GithubLogo classes={classes} link="https://github.com/kore4n"/>
          <LinkedinLogo classes={classes} link="https://linkedin.com/in/jason-kwan-809a071b1"/>
          <Email classes={classes} link="mailto:kwan.jason2001@gmail.com"/>
        </div>
    )
}