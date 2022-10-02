import Link from 'next/link'


export default function LinkTextLocal(props){
    return (
        <>
            <Link href={props.link}>
                {props.linkText}
            </Link>
        </>
    )
}