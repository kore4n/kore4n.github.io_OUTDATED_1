

export default function ContentRow(props){
    return (
        <div className='flex place-content-evenly'>
            {props.children}
        </div>
    )
}