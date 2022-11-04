

export default function ContentRow(props){
    return (
        <div className='flex place-content-evenly py-20'>
            {props.children}
        </div>
    )
}