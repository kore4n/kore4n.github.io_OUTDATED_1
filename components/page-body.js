import Navbar from "./navbar";

export default function PageBody(props) {
  return (
    <div className=' bg-gradient-to-b from-slate-900 to-main-background min-h-screen flex flex-col px-40 py-10 '>
        <Navbar classes="text-main-cyan hover:scale-110 duration-100"/>
        {props.children}
    </div>
  );
}