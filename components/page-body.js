

export default function PageBody(props) {

  return (
    <div className=' bg-main-background bg-opacity-80 min-h-screen max-w-7xl flex flex-col shadow-lg shadow-black'>
        {props.children}
    </div>
  );
}