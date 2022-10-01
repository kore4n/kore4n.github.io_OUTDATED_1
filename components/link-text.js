import Link from "next/link";

export default function LinkText(props){
    return (
        <div className= " m-1 hover:scale-110">
            <a href={props.link}>
                {props.linkText}
            </a>
        </div>
    )
}