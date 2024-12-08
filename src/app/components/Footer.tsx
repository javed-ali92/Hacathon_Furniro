import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-40 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins">Funiro.</h3>
            <p className="text-[#9F9F9F] text-sm md:text-base leading-6">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 ml-10">
            <h6 className="text-[#9F9F9F] text-sm font-semibold">Links</h6>
            <Link href="/" className="text-base font-medium hover:underline">
              Home
            </Link>
            <Link href="/" className="text-base font-medium hover:underline">
              Shop
            </Link>
            <Link href="/" className="text-base font-medium hover:underline">
              About
            </Link>
            <Link href="/" className="text-base font-medium hover:underline">
              Contact
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 ">
            <h6 className="text-[#9F9F9F] text-sm font-semibold">Help</h6>
            <p className="text-base font-medium">Payment Options</p>
            <p className="text-base font-medium">Returns</p>
            <p className="text-base font-medium">Privacy Policies</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h6 className="text-[#9F9F9F] text-sm font-semibold">Newsletter</h6>
            <div className=" flex justify-between items-center pb-1">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="outline-none text-sm text-[#9F9F9F] placeholder:text-[#9F9F9F] flex-1 border-b-[1px] border-black"
              />
              <button className="text-black font-semibold text-sm hover:underline">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 my-6" />

        {/* Bottom Section */}
        <div className="text-center md:text-left my-">
          <p className="text-sm font-normal font-poppins text-[#3A3A3A]">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
