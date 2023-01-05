


export default function SkillBox({title, description, logo}) {
    let classes = "";

    return (
        <div className='bg-gradient-to-r from-cyan-400 to-cyan-600 min-h-[20vh] text-black text-left rounded-lg m-2 pl-6 pt-4'>
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