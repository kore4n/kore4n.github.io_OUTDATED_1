

export default function LinkText(props){
    return (
        <>
            <a href={props.link} className="hover:scale-110" >
                {props.linkText}
            </a>
        </>
    )
}