import Link from "next/link";
import Image from "next/image";

export default function Logo(props){
    return (
        <div className= "  m-1 hover:scale-110">
            <a href={props.link}  >
                <Image className=" filter fill-blue-500" src={props.imagePath} height={30} width={30} alt={props.altImage} />
            </a>
        </div>
    )
}