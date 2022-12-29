


export default function SkillBox(props) {
    return (
        <div className='bg-cyan-300 min-h-[20vh] text-black text-left rounded-lg m-2 pl-6 pt-16'>
            {props.title}
            <div className=" text-sm">
                {props.description}
            </div>
        </div>
    );
  }