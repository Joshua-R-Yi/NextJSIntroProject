// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Divider,
// } from "@nextui-org/react";
// import { Image } from "@nextui-org/image";
// // import { Avatar } from "@nextui-org/avatar";

// async function getData() {
//   const res = await fetch("http://127.0.0.1:3030/list");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   const data = await res.json();

//   // console.log()
//   return data;
// }

// export default async function Card1() {
//   const listItems = await getData();

//   return (
//     <>
//       {listItems.map((curr: any, index: any) => (
//         <div key={index}>
//           <Card
//             isHoverable
//             isPressable
//             className="min-w-[100px] min-h-[200px] sm:min-w-[1000px] sm:min-h-[300px]sm:flex sm:flex-row sm:gap-[10px] animate-appearance-in"
//           >
//             <div>
//               <CardHeader>
//                 <Image
//                   isBlurred
//                   isZoomed
//                   className="max-w-full"
//                   height={200}
//                   src={curr.img}
//                   width={600}
//                 />
//               </CardHeader>
//             </div>
//             <div className="flex">
//               <CardBody>
//                 <h1 className="text-3xl font-bold">{curr.title}</h1>
//                 <h3>{curr.date}</h3>
//                 <p>{curr.details}</p>
//               </CardBody>
//             </div>
//           </Card>
//         </div>
//       ))}
//     </>
//   );
// }
