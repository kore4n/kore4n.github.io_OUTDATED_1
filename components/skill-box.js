import DesignLogo from "./design-logo";
import GitHubLogo from "./github";
import ProfessionalLogo from "./professional-logo";
import TechnologyLogo from "./technology";
import ToolsLogo from "./tools-logo";



export default function SkillBox({title, description, logo}) {
    let classes = "";

    return (
        <div className='bg-gradient-to-r from-cyan-400 to-cyan-600 min-h-[20vh] text-black text-left rounded-lg m-2 pl-6 pt-4'>
            {/* <TechnologyLogo classes={classes}/> */}
            {/* <ToolsLogo classes={classes}/> */}
            {/* <DesignLogo classes={classes}/> */}
            {/* <ProfessionalLogo classes={classes}/> */}
            {logo}
            <span className="font-bold">
                {title}
            </span>
            <div className="text-sm font-semibold">
                {description}
            </div>
        </div>
    );
  }