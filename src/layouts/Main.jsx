import { ArrowDown, ArrowRight } from "react-feather";
import BigText from "../components/BigText";
import MediumText from "../components/MediumText";
import Link from "../components/Link";

const Main = () => {
  return (
    <div className="w-[70%] h-full flex flex-col items-center mt-8">
      <div className="w-full bg-[url('/div.png')] h-[600px] items-start flex flex-col justify-center bg-no-repeat bg-cover">
        <p className="w-[60%]">
          <BigText text="Design studio for the web3 world" />
        </p>
        <p className="mt-20 text-white/60 flex flex-row gap-x-8 w-full md:w-[80%] lg:w-[60%]">
          <ArrowDown /> We help companies design their products to be ready for
          web3 world
        </p>
        <img src="/detail.png" className="absolute top-16 right-0" />
      </div>
      <p className="mt-[225px] flex flex-col justify-between w-full gap-y-16">
        <p className="text-white/60">Our clients are backed by:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <img src="/logo-ycombinator.svg.png" />
          <img src="/logo-coinbase.svg.png" />
          <img src="/logo-a16z.png.png" />
          <img src="/logo-blockchange.svg.png" />
        </div>
      </p>
      <div className="mt-[150px] w-full h-[600px] flex flex-col gap-y-16 items-center justify-around">
        <div className="flex flex-col gap-y-4">
          <MediumText text="What is Web3 studio?" />
          <p className="text-white/60">
            Things around crypto, NFTs and web3 as a whole are unbelievably
            interesting. Unfortunately, the overall usability as well as the
            quality of the UI is often still not up to the task. To achieve mass
            adoption, overcoming those hurdles will be key. And this is where
            our story begins.
          </p>
        </div>
        <img src="/svg.png" />
      </div>
      <div className="mt-[225px] w-full h-[600px] flex flex-col gap-y-8">
        <MediumText text="Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img src="/casestudy-01.jpg.png" />
          <img src="/casestudy-02.jpg.png" />
          <img src="/casestudy-03.jpg.png" className="-mt-32" />
          <img src="/casestudy-04.jpg.png" className="h-[135px] w-full" />
        </div>
      </div>
      <div className="mt-[500px] w-full h-[600px] flex flex-col gap-y-8">
        <MediumText text="More" />
        <div className="flex flex-col lg:flex-row gap-8">
          <img src="other01.jpg.png" />
          <img src="other04.jpg.png" />
        </div>
        <p className="flex flex-row items-center justify-center">
          <Link
            href="#"
            text={
              <p className="flex flex-row gap-x-8 items-center">
                <ArrowRight />
                See all
              </p>
            }
          />
        </p>
        <img src="/detail3.png" className="mt-[225px] w-full h-auto" />
        <img
          src="/detail2.png"
          className="mt-[225px] -z-10 w-full h-auto absolute left-0"
        />
        <BigText
          text="How we can 
help grow"
        />
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-y-10">
            <MediumText text="Product clarity" />
            <p className="text-white/60">UX/UI design</p>
            <p className="text-white/60">Maintain process</p>
          </div>
          <img src="/help01.jpg.png" className="rounded-lg" />
          <div className="flex flex-col gap-y-10">
            <h1 className="text-[2rem]">
              Are you at the idea stage? We will help you identify the critical
              MVP product scope.
            </h1>
            <p className="text-white/60">product goal&vision</p>
            <p className="text-white/60">brand voice</p>
            <p className="text-white/60">product position</p>
          </div>
        </div>
        <div className="mt-[225px] flex flex-col gap-y-8">
          <MediumText text="About" />
          <p className="text-white/60 text-[1.5rem]">
            Team of product and brand designers that are really passionate about
            blockchain technology and good design. We are not just UI freaks! We
            advocate users for better product experience and common sense.
          </p>
          <div className="flex flex-row items-center justify-center gap-x-14">
            <Link
              href="#"
              text={
                <p className="flex flex-row items-center gap-x-8">
                  Learn more about us
                  <ArrowRight />
                </p>
              }
            />
            
          </div>
          <Link
              href="https://github.com/kad1rr/thirdweb-website"
              text="View on Github"
            />
        </div>
      </div>
    </div>
  );
};

export default Main;
