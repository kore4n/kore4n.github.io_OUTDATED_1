import Image from "next/image";

export default function Logo(props){
    return (
        <div className= " m-1 ">
            <a href={props.link} className=" hover:scale-110" >
                <Image className=" " src={props.imagePath} height={30} width={30} alt={props.altImage} />
            </a>
        </div>
    )
}