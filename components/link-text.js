import Emphasize from "./emphasize-text";


export default function LinkText(props){
    return (
        <>
            <a href={props.link} className=" hover:text-red-600" >
                <Emphasize emphasis={props.linkText} />
            </a>
        </>
    )
}