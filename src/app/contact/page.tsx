import Image from "next/image";
import CustomerCare from "@/components/Customer-Care";
import Banner from "@/components/Banner";

export default function Contact() {
  return (
    <div className=" flex flex-col gap-20">
      {/* banner section start*/}
      <Banner name="Contact" title="Contact" logo="/logo.png" />
      {/* banner section end */}

      {/* Contact Section Start */}
      <div className="min-h-screen flex flex-col justify-between px-4 py-10 lg:px-10">
        {/* Head Section Start */}
        <div className="flex flex-col mx-auto gap-2 text-center mb-16">
          <h2 className="font-semibold font-poppins text-4xl">
            Get In Touch With Us
          </h2>
          <p className="text-base font-poppins text-[#9F9F9F] font-normal">
            For More Information About Our Product & Services. Please Feel Free
            To Drop <br className="hidden lg:block" />
            Us An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>
        {/* Head Section End */}

        {/* Main Section Start */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center mt-10 lg:gap-20 max-w-[1440px] mx-auto">
          {/* Contact Details Start */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="relative flex gap-3 items-start">
              <Image
                src="/address.png"
                alt="Address Icon"
                height={27}
                width={22}
                className="absolute top-1 left-0"
              />
              <div className="pl-10">
                <h5 className="font-poppins font-medium text-2xl">Address</h5>
                <p className="text-base font-poppins font-normal w-48">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="relative flex gap-3 items-start">
              <Image
                src="/phone.png"
                alt="Phone Icon"
                height={22}
                width={22}
                className="absolute top-1 left-0"
              />
              <div className="pl-10">
                <h5 className="font-poppins font-medium text-2xl">Phone</h5>
                <p className="text-base font-poppins font-normal">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-base font-poppins font-normal">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="relative flex gap-3 items-start">
              <Image
                src="/clock.png"
                alt="Clock Icon"
                height={23}
                width={23}
                className="absolute top-1 left-0"
              />
              <div className="pl-10">
                <h5 className="font-poppins font-medium text-2xl">
                  Working Time
                </h5>
                <p className="text-base font-poppins font-normal">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-base font-poppins font-normal">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          {/* Contact Details End */}

          {/* Form Section Start */}
          <div className="w-full lg:w-[500px] lg:ml-20">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#333] mb-2 font-medium"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full h-[55px] border border-[#9F9F9F] rounded-md px-4 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#333] mb-2 font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full h-[55px] border border-[#9F9F9F] rounded-md px-4 focus:outline-none"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#333] mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full h-[55px] border border-[#9F9F9F] rounded-md px-4 focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#333] mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about"
                  className="w-full h-[120px] border border-[#9F9F9F] rounded-md px-4 py-2 resize-none focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-[300px] mx-auto h-[55px] bg-[#C7963D] text-white font-medium rounded-md hover:bg-[#a9782e] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Form Section End */}
        </div>
        {/* Main Section End */}
      </div>
      {/* Contact Section End */}

      {/* customer care Section Start */}
      <CustomerCare />
      {/* customer care Section End */}
    </div>
  );
}