// import Image from "next/image"

// interface blogs{
//     image:string,
//     headline:string,
//     paragraph:string,
//     couponName:string
// }


// export default function Blogs({image , headline , paragraph , couponName}:blogs){
//     return(
//         <div className="h-[794px] w-[820px] bg-slate-300">
//             <Image src={image} height={500} width={817} alt="laptop image"/>


//             <div className="w-[249px] h-6 flex justify-between">
//                 <span className="w-[76px]">
//                     <Image src={"/admin.png"} alt="admin" width={20} height={20}/>
//                     <p className="text-base font-poppins font-normal text-[#9F9F9F]">Admin</p>
//                 </span>
//                 <span className="w-[76px]">
//                     <Image src={"/calender.png"} alt="admin" width={20} height={20}/>
//                     <p className="text-base font-poppins font-normal text-[#9F9F9F]">14 Oct 2022</p>
//                 </span>
//                 <span className="w-[76px]">
//                     <Image src={"/tag.png"} alt="admin" width={20} height={20}/>
//                     <p className="text-base font-poppins font-normal text-[#9F9F9F]">{couponName}</p>
//                 </span>
//             </div>

//             <div>

//             </div>
//         </div>
//     )
// }