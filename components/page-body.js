import Navbar from "./navbar";

export default function PageBody(props) {
  return (
    <div className=' bg-gradient-to-b from-gray-900 to-main-background bg-fixed min-h-screen flex flex-col'>
        {/* <Navbar classes="text-main-cyan hover:scale-110 duration-100"/> */}
        {props.children}
    </div>
  );
}