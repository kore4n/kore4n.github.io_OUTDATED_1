import Image from "next/image";


export default function ProjectBox({name, imgLink, pageLink, description}) {
    return (
        <a
            href={pageLink}
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-gray-100 hover:to-gray-400 min-h-[48vh] hover:scale-105 duration-100 text-black text-left rounded-lg shadow-lg shadow-black m-6 ">
            <div className=" min-h-[10px]">
                <Image className="rounded-t-lg" src={imgLink} alt={name} width={600} height={600} />
            </div>
            <div className="text-center text-gray-900 text-lg font-bold py-2">
                {name}
            </div>
            <div className=" font-semibold text-sm px-5">
                {description}
            </div>
        </a>
    );
  }