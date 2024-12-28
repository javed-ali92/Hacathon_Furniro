import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Blog() {
  return (
    <div>
      <Banner name="Blog" title="Blog" logo="/logo.png"/>
      {/* Main grid layout */}
      <div className="grid grid-cols-1 mx-auto xl:grid-cols-[820px_380px] gap-12 lg:gap-10 pt-12 max-w-[1440px] pl-3">
        {/* Left Blog Section */}
        <div className="space-y-16 w-full">
          <Blogs
            couponName="Wood"
            image="/post-1.png"
            headline="Going all-in with millennial design"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          />

          <Blogs
            couponName="Handmade"
            image="/post-2.png"
            headline="Exploring new ways of decorating"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          />

          <Blogs
            couponName="Wood"
            image="/post-3.png"
            headline="Going all-in with millennial design"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          />
        </div>

        {/* Right Section */}
        <div className="pl-0 md:pl-2 lg:pl-2 flex flex-col gap-20">
          {/* Search Box */}
          <div className="h-auto flex gap-8 items-center flex-col">
            <div className="h-[58px] w-full max-w-[311px] border rounded-md flex items-center justify-center border-[#9F9F9F]">
              <label htmlFor="search" className="flex gap-4">
                <input
                  type="text"
                  className="outline-none placeholder:text-base w-full"
                  id="search"
                  placeholder="Search..."
                />
                <FiSearch className="w-5 h-5" />
              </label>
            </div>

            {/* Categories Section */}
            <div className="w-full max-w-[251px] flex flex-col gap-6">
              <h4 className="font-poppins text-2xl font-medium">Categories</h4>
              <div className="flex flex-col gap-6">
                <span className="flex justify-between text-base text-[#9F9F9F]">
                  <p>Crafts</p>
                  <p>2</p>
                </span>
                <span className="flex justify-between text-base text-[#9F9F9F]">
                  <p>Design</p>
                  <p>8</p>
                </span>
                <span className="flex justify-between text-base text-[#9F9F9F]">
                  <p>Handmade</p>
                  <p>7</p>
                </span>
                <span className="flex justify-between text-base text-[#9F9F9F]">
                  <p>Interior</p>
                  <p>1</p>
                </span>
                <span className="flex justify-between text-base text-[#9F9F9F]">
                  <p>Wood</p>
                  <p>6</p>
                </span>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full max-w-[252px] space-y-6">
              <h6 className="text-2xl font-poppins font-medium">Recent Posts</h6>
              <div className="flex gap-3 items-center">
                <Image src="/recent-1.png" alt="recent post 1" height={80} width={80} />
                <span className="flex flex-col">
                  <h6 className="text-sm font-poppins font-normal">
                    Going all-in with millennial design
                  </h6>
                  <p className="text-xs font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Image src="/recent-2.png" alt="recent post 2" height={80} width={80} />
                <span className="flex flex-col">
                  <h6 className="text-sm font-poppins font-normal">
                    Exploring new ways of decorating
                  </h6>
                  <p className="text-xs font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Image src="/recent-3.png" alt="recent post 3" height={80} width={80} />
                <span className="flex flex-col">
                  <h6 className="text-sm font-poppins font-normal">
                    Handmade pieces that took time to make
                  </h6>
                  <p className="text-xs font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Image src="/recent-4.png" alt="recent post 3" height={80} width={80} />
                <span className="flex flex-col">
                  <h6 className="text-sm font-poppins font-normal">
                      Modern home in Milan
                  </h6>
                  <p className="text-xs font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Image src="/recent-5.png" alt="recent post 3" height={80} width={80} />
                <span className="flex flex-col">
                  <h6 className="text-sm font-poppins font-normal">
                  Colorful office redesign
                  </h6>
                  <p className="text-xs font-poppins text-[#9F9F9F]">03 Aug 2022</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex flex-wrap justify-center items-center w-full gap-4 my-16">
        <button className="w-[60px] h-[60px] font-poppins rounded-lg text-xl bg-[#B88E2F] text-white flex justify-center items-center">
          1
        </button>
        <button className="w-[60px] h-[60px] font-poppins rounded-lg text-xl hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] flex justify-center items-center">
          2
        </button>
        <button className="w-[60px] h-[60px] font-poppins rounded-lg text-xl hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] flex justify-center items-center">
          3
        </button>
        <button className="w-[100px] h-[60px] font-poppins rounded-lg text-xl hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] flex justify-center items-center">
          Next
        </button>
      </div>
    </div>
  );
}