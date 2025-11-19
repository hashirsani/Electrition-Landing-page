// import React from "react";
// import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// import { GiAutoRepair } from "react-icons/gi";

// const Percs = () => {
//   const steps = [
//     {
//       title: "Identify problem",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbAlertTriangle />,
//       step: "Step 01",
//       offset: "mt-0",
//     },
//     {
//       title: "Provide time & cost",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbPlug />,
//       step: "Step 02",
//       offset: "mt-10",
//     },
//     {
//       title: "Implement service",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <GiAutoRepair />,
//       step: "Step 03",
//       offset: "mt-0",
//     },
//     {
//       title: "Identify problem",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbBulb />,
//       step: "Step 04",
//       offset: "mt-10",
//     },
//   ];

//   return (
//     <div id="perks" className="w-full py-20 bg-white">
//       {/* Heading */}
//       <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3">
//         We provide electrical
//       </h1>
//       <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">
//         professional electric services
//       </h2>

//       {/* Cards */}
//       <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className={`relative w-full sm:w-[253px] h-64 sm:h-[275px] bg-gray-50 shadow-xl rounded-lg p-6 sm:p-8 pt-14 text-center transition-all duration-300 hover:-translate-y-2 ${
//               item.offset
//             }`}
//           >
//             {/* Icon Circle */}
//             <div
//               className="
//                 absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 sm:h-20 sm:w-20
//                 rounded-full flex justify-center items-center text-3xl sm:text-4xl
//                 bg-black text-white transition-all duration-300
//                 hover:bg-red-600
//               "
//               onMouseEnter={(e) => {
//                 e.currentTarget.classList.add("jump-animation");
//               }}
//               onAnimationEnd={(e) => {
//                 e.currentTarget.classList.remove("jump-animation");
//               }}
//             >
//               {item.icon}
//             </div>

//             {/* Title */}
//             <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
//             <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

//             {/* Step Badge */}
//             <div
//               className="
//                 absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2
//                 bg-red-600 text-white px-4 sm:px-6 py-1 sm:py-2 font-semibold rounded-sm shadow-md
//                 transition-all duration-300 text-xs sm:text-sm
//               "
//             >
//               {item.step}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Percs;



// import React from "react";
// import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// import { GiAutoRepair } from "react-icons/gi";

// const GOLD = "#FEC509";
// const GOLD_HOVER = "#E5AE00";

// const Percs = () => {
//   const steps = [
//     {
//       title: "Identify problem",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbAlertTriangle />,
//       step: "Step 01",
//       offset: "mt-0",
//     },
//     {
//       title: "Provide time & cost",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbPlug />,
//       step: "Step 02",
//       offset: "mt-10",
//     },
//     {
//       title: "Implement service",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <GiAutoRepair />,
//       step: "Step 03",
//       offset: "mt-0",
//     },
//     {
//       title: "Final Quality Check",
//       desc: "This box could corrode over loose connection, dust",
//       icon: <TbBulb />,
//       step: "Step 04",
//       offset: "mt-10",
//     },
//   ];

//   return (
//     <div id="perks" className="w-full py-20" style={{ backgroundColor: "#1A1A1A" }}>
//       {/* Heading */}
//       <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-white">
//         We provide electrical
//       </h1>
//       <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-white">
//         professional electric services
//       </h2>

//       {/* Cards */}
//       <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className={`relative w-full sm:w-[253px] h-64 sm:h-[275px] 
//             rounded-lg p-6 sm:p-8 pt-14 text-center 
//             transition-all duration-300 hover:-translate-y-2
//             ${item.offset}`}
//             style={{
//               backgroundColor: "#111111",
//               boxShadow: "0px 3px 10px rgba(0,0,0,0.4)"
//             }}
//           >
//             {/* Icon Circle */}
//             <div
//               className="
//                 absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 sm:h-20 sm:w-20
//                 rounded-full flex justify-center items-center text-3xl sm:text-4xl
//                 transition-all duration-300
//               "
//               style={{
//                 backgroundColor: GOLD,
//                 color: "#000"
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.classList.add("jump-animation");
//                 e.currentTarget.style.backgroundColor = GOLD_HOVER;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = GOLD;
//               }}
//               onAnimationEnd={(e) => {
//                 e.currentTarget.classList.remove("jump-animation");
//               }}
//             >
//               {item.icon}
//             </div>

//             {/* Title */}
//             <h2 className="text-lg sm:text-xl font-semibold text-white">
//               {item.title}
//             </h2>

//             <p className="text-sm mt-2" style={{ color: "#BFBFBF" }}>
//               {item.desc}
//             </p>

//             {/* Step Badge */}
//             <div
//               className="
//                 absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2
//                 font-semibold rounded-sm shadow-md
//                 transition-all duration-300 text-xs sm:text-sm
//               "
//               style={{
//                 backgroundColor: GOLD,
//                 color: "#000",
//                 padding: "8px 18px"
//               }}
//             >
//               {item.step}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Percs;






import React from "react";
import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";

const GOLD = "#FEC509";
const GOLD_HOVER = "#E5AE00";

const Percs = () => {
  const steps = [
    { title: "Identify problem", desc: "This box could corrode over loose connection, dust", icon: <TbAlertTriangle />, step: "Step 01" },
    { title: "Provide time & cost", desc: "This box could corrode over loose connection, dust", icon: <TbPlug />, step: "Step 02" },
    { title: "Implement service", desc: "This box could corrode over loose connection, dust", icon: <GiAutoRepair />, step: "Step 03" },
    { title: "Final Quality Check", desc: "This box could corrode over loose connection, dust", icon: <TbBulb />, step: "Step 04" },
  ];

  return (
    <div id="perks" className="w-full py-20 bg-[#1A1A1A]">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-white">
        We provide electrical
      </h1>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-white">
        professional electric services
      </h2>

      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="
              relative 
              w-full 
              sm:w-[253px] 
              sm:h-[400px]     /* Taller boxes on desktop */
              lg:h-[390px]     /* Even taller on large screens */
              bg-[#111111] 
              rounded-lg 
              p-6 
              sm:p-8 
              text-center 
              transition-all 
              duration-300 
              hover:-translate-y-2
              flex flex-col justify-between
            "
          >
            {/* Icon Circle */}
            <div
              className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex justify-center items-center text-3xl sm:text-4xl transition-all duration-300"
              style={{ backgroundColor: GOLD, color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("jump-animation");
                e.currentTarget.style.backgroundColor = GOLD_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = GOLD;
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("jump-animation");
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              {item.title}
            </h2>

            <p className="text-sm mt-2 text-[#BFBFBF]">
              {item.desc}
            </p>

            {/* Step Badge */}
            <div
              className="
                mt-8     /* More space between text and button */
                inline-block 
                font-semibold 
                rounded-sm 
                shadow-md 
                text-xs sm:text-sm 
                px-4 py-2
              "
              style={{ backgroundColor: GOLD, color: "#000" }}
            >
              {item.step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Percs;
