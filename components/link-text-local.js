import Link from 'next/link'


export default function LinkTextLocal(props){
    return (
        <li className='inline-block font-bold text-2xl text-main-cyan hover:scale-110 hover:text-teal-300 duration-100'>
            <Link href={props.link}>
                <a>
                    {props.linkText}
                </a>
            </Link>
        </li>
    )
}