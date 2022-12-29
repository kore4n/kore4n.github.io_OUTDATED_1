import Link from 'next/link'


export default function LinkTextLocal(props){
    return (
        <li className='inline-block font-bold text-2xl text-main-cyan hover:text-teal-300 hover:scale-110 duration-100'>
            <Link href={props.link}>
                <a>
                    {props.linkText}
                </a>
            </Link>
        </li>
    )
}