import Link from 'next/link'


export default function LinkTextLocal(props){
    return (
        <>
            <Link href={props.link}>
                <a className="text-main-blue hover:scale-110">
                    {props.linkText}
                </a>
            </Link>
        </>
    )
}