import Image from "next/image";

interface Blogs {
  image: string;
  headline: string;
  paragraph: string;
  couponName: string;
}

export default function Blogs({
  image,
  headline,
  paragraph,
  couponName,
}: Blogs) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[820px] mx-auto">
      {/* Blog Image */}
      <Image
        src={image}
        height={500}
        width={817}
        alt="laptop image"
        className="w-full h-auto object-cover"
      />

      {/* Info Section */}
      <div className="flex lg:gap-10 sm:gap-2 md:justify-start justify-between flex-wrap gap-2 text-[#9F9F9F] px-2">
        <span className="flex items-center gap-2">
          <Image src="/admin.png" alt="admin" width={20} height={20} />
          <p className="text-sm md:text-base font-poppins">Admin</p>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/calender.png" alt="calendar" width={20} height={20} />
          <p className="text-sm md:text-base font-poppins">14 Oct 2022</p>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/tag.png" alt="tag" width={20} height={20} />
          <p className="text-sm md:text-base font-poppins">{couponName}</p>
        </span>
      </div>

      {/* Headline */}
      <h3 className="text-2xl md:text-[30px] leading-[35px] md:leading-[45px] font-medium font-poppins px-2">
        {headline}
      </h3>

      {/* Paragraph */}
      <p className="text-sm md:text-[15px] leading-[22px] text-[#9F9F9F] px-2">
        {paragraph}
      </p>

      {/* Read More Button */}
      <button
        type="button"
        className="flex flex-col items-center w-fit  px-2"
      >
        <p className="font-poppins text-sm md:text-base font-normal">Read more</p>
        <hr className="w-[70px] h-[2px] bg-black"/>
      </button>
    </div>
  );
}