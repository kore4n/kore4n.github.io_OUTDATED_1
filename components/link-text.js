

export default function LinkText(props){
    return (
        <>
            <a href={props.link} className=" text-main-blue hover:scale-110" >
                {props.linkText}
            </a>
        </>
    )
}