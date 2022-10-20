import Navbar from "./navbar";



export default function PageBody(props) {
  return (
    <div className='bg-main-background min-h-screen float-right flex-1'>
        {props.children}
    </div>
  );
}