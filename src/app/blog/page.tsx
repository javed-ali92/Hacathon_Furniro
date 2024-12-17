import Banner from "../components/Banner";
// import Blogs from "@/components/Blogs";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";


export default function Blog(){
    return(
        <div>
            <Banner name="Blog"/>
            <div className="h-[2710px] grid grid-cols-2 grid-rows-1 gap-28 pt-24">
                {/* left blog sectiom start */}
                <div className="bg-slate-100 h-[600px] w-[500px]">
                    {/* <Blogs/>  working  */}
                </div>
                {/* left blog sectiom end */}
                



                {/* right sectiom start */}
                <div className="">
                    <div className="w-[393px] h-[537px] flex gap-10  items-center flex-col">
                        <div className="h-[58px] w-[311px] border rounded-md flex items-center justify-center border-[#9F9F9F] ">
                            <label htmlFor="search" className="flex gap-4">
                                <input type="text" className="outline-none placeholder:text-base" id="search"/>
                                <FiSearch/>
                            </label>
                        </div>

                        <div className="w-[251px] h-[353px] flex flex-col gap-8 ">
                            <h4 className="font-poppins text-2xl/8 font-medium">Categories</h4>
                            <div className="flex flex-col gap-8 w-[251px] h-[353px]">
                                <span className="font-poppins text-base text-[#9F9F9F] justify-between flex w-full">
                                    <p>Crafts</p>
                                    <p>2</p>
                                </span>
                                <span className="font-poppins text-base text-[#9F9F9F] justify-between flex w-full">
                                    <p>Design</p>
                                    <p>8</p>
                                </span>
                                <span className="font-poppins text-base text-[#9F9F9F] justify-between flex w-full">
                                    <p>Handmade</p>
                                    <p>7</p>
                                </span>
                                <span className="font-poppins text-base text-[#9F9F9F] justify-between flex w-full">
                                    <p>Interior</p>
                                    <p>1</p>
                                </span>
                                <span className="font-poppins text-base text-[#9F9F9F] justify-between flex w-full">
                                    <p>Wood</p>
                                    <p>6</p>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="h-[618px] w-[393px] flex flex-col justify-center items-center">
                        <div className="w-[252px] h-[618px] flex flex-col justify-between">
                            <h6 className="text-2xl/[38px] font-poppins font-medium">Recent Posts</h6>

                            <div className="flex w-[221px] h-[80px] gap-3 items-center">
                                <Image src={"/recent-1.png"} alt="recent post 1" height={80} width={80}/>
                                <span className="flex flex-col">
                                    <h6 className="font-normal font-poppins text-sm/[21px]">Going all-in with millennial design</h6>
                                    <p className="text-xs/[18px] font-normal font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                                </span>
                            </div>
                            <div className="flex w-[221px] h-[80px] gap-3 items-center">
                                <Image src={"/recent-2.png"} alt="recent post 1" height={80} width={80}/>
                                <span className="flex flex-col">
                                    <h6 className="font-normal font-poppins text-sm/[21px]">Exploring new ways of decorating</h6>
                                    <p className="text-xs/[18px] font-normal font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                                </span>
                            </div>
                            <div className="flex w-[221px] h-[80px] gap-3 items-center">
                                <Image src={"/recent-3.png"} alt="recent post 1" height={80} width={80}/>
                                <span className="flex flex-col">
                                    <h6 className="font-normal font-poppins text-sm/[21px]">Handmade pieces that took time to make</h6>
                                    <p className="text-xs/[18px] font-normal font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                                </span>
                            </div>
                            <div className="flex w-[221px] h-[80px] gap-3 items-center">
                                <Image src={"/recent-4.png"} alt="recent post 1" height={80} width={80}/>
                                <span className="flex flex-col">
                                    <h6 className="font-normal font-poppins text-sm/[21px]">Modern home in Milan</h6>
                                    <p className="text-xs/[18px] font-normal font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                                </span>
                            </div>
                            <div className="flex w-[221px] h-[80px] gap-3 items-center">
                                <Image src={"/recent-5.png"} alt="recent post 1" height={80} width={80}/>
                                <span className="flex flex-col">
                                    <h6 className="font-normal font-poppins text-sm/[21px]">Colorful office redesign</h6>
                                    <p className="text-xs/[18px] font-normal font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right sectiom end */}




                {/* button section start */}
                <div className="bg-gray-900 h-[100px] w-[1000px]"></div>
                {/* button section end */}
            </div>
        </div>
    )
}