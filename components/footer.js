import Socials from "./links";


export default function Footer(){
    return (
        <footer className=" grid place-items-center mt-auto mb-24">
            <Socials classes="transition hover:scale-110 hover:fill-white duration-200" />
        </footer>
    )
}