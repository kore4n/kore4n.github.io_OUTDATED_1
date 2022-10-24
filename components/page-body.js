


export default function PageBody(props) {
  return (
    <div className='bg-main-background min-h-screen flex flex-col px-20 py-10 '>
        {props.children}
    </div>
  );
}