import Link from 'next/link'


export default function LinkTextLocal(props){
    return (
        <li className='inline-block text-main-cyan hover:scale-110 duration-100'>
            <Link href={props.link}>
                <a>
                    {props.linkText}
                </a>
            </Link>
        </li>
    )
}