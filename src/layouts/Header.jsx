import { AlignRight } from "react-feather";
import BorderLink from "../components/BorderLink";
import Link from "../components/Link";

const Header = () => {
  return (
    <header className="w-full h-16 flex flex-row items-center justify-between p-8">
      <a href="/#" className="w-[25%]">
        <img src="logo.png" alt="Logo" />
      </a>
      <AlignRight className="flex lg:hidden" onClick={() => {
        const menu = document.querySelector('.menu')
        const body = document.body
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
        body.classList.toggle('lg:overflow-visible')
      }} />
      <div className="menu hidden flex-col absolute top-16 left-0 items-center justify-center w-full h-full bg-black gap-16 lg:flex lg:flex-row lg:relative lg:top-0 lg:justify-center">
        <Link href="#" text="Home" />
        <Link href="#" text="About" />
        <Link href="#" text="Contact" />
        <Link href="#" text="Career" />
        <div className="flex lg:hidden">
        <BorderLink href="#" text="Web3 Studio" />
      </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-center p-4 w-[25%]">
        <BorderLink href="#" text="Web3 Studio" />
      </div>
    </header>
  );
};

export default Header;
