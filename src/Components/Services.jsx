// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Services Data
//   const servicesList = [
//     { title: "Web Development", tech: "React, Node.js, Next.js, TailwindCSS", detail: "We build fast, responsive, and SEO-friendly websites that offer exceptional performance and scalability using the latest web technologies.", icon: "💻" },
//     { title: "Mobile Apps", tech: "React Native, Flutter, Kotlin, Swift", detail: "Our team crafts high-quality native and cross-platform mobile applications that provide seamless user experiences on Android and iOS.", icon: "📱" },
//     { title: "UI/UX Design", tech: "Figma, Adobe XD, Photoshop, Illustrator", detail: "We design visually stunning and intuitive user interfaces focused on enhancing usability, engagement, and overall brand identity.", icon: "🎨" },
//     { title: "Backend APIs", tech: "Node.js, Express, Django, Spring Boot", detail: "We create secure, scalable, and efficient RESTful and GraphQL APIs to power your web and mobile applications with robust backend systems.", icon: "🛠️" },
//     { title: "Cloud Solutions", tech: "AWS, Azure, Firebase, Google Cloud", detail: "We help businesses migrate, deploy, and scale their infrastructure on the cloud for better reliability, speed, and global reach.", icon: "☁️" },
//     { title: "AI & ML", tech: "Python, TensorFlow, PyTorch, Scikit-learn", detail: "Our AI specialists develop intelligent systems that automate tasks, analyze data, and deliver smart predictions to drive innovation.", icon: "🤖" },
//     { title: "E-commerce Solutions", tech: "Shopify, WooCommerce, Magento, Stripe", detail: "We build powerful e-commerce platforms that integrate secure payment gateways, inventory systems, and smooth shopping experiences.", icon: "🛒" },
//     { title: "IT Consulting", tech: "Agile, Scrum, ITIL, DevOps", detail: "We provide expert IT consulting to help organizations streamline processes, adopt modern tools, and achieve digital transformation goals.", icon: "🧑‍💼" },
//     { title: "Digital Marketing", tech: "SEO, SEM, Google Analytics, Facebook Ads", detail: "We create targeted digital marketing campaigns that boost your brand visibility, engagement, and conversions across online platforms.", icon: "📈" },
//     { title: "DevOps Services", tech: "Docker, Kubernetes, Jenkins, GitHub Actions", detail: "Our DevOps engineers implement CI/CD pipelines and automation tools to optimize deployment, monitoring, and software delivery cycles.", icon: "⚙️" },
//   ];

//   // Logic to determine which services to display
//   const displayedServices = showAllServices ? servicesList : servicesList.slice(0, 4);

//   return (
//     <div id="services" className="min-h-screen bg-gray-50 pt-24 pb-20">
//       {/* Internal Style for interactions */}
//       <style jsx="true">
//         {`
//           .service-card:hover {
//             cursor: pointer;
//           }
//         `}
//       </style>

//       <section className="px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//               Our Core Services 🚀
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto text-2xl">
//               We provide a wide range of cutting-edge software solutions tailored to scale your business using top-notch technologies.
//             </p>
//           </motion.div>

//           <motion.div
//             layout // Enable Framer Motion layout animations for grid changes
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {displayedServices.map((service, index) => {
//               const isExpanded = expandedIndex === index;
//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   onClick={() => setExpandedIndex(isExpanded ? null : index)} // Toggle expand on card click
//                   className={`service-card bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start cursor-pointer transition-all duration-500 border-t-4 border-indigo-500 hover:shadow-2xl hover:border-indigo-700 ${
//                     isExpanded ? "row-span-2" : "h-auto"
//                   }`}
//                 >
//                   <div className="w-14 h-14 flex items-center justify-center mb-4 text-3xl bg-indigo-50 rounded-full border border-indigo-200">
//                     <span>{service.icon}</span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {service.title}
//                   </h3>

//                   {/* Technology/Detail Block */}
//                   <div className="flex-grow">
//                     <p className="text-gray-700 text-md leading-relaxed">
//                       {isExpanded ? service.detail : <span className="font-semibold text-indigo-600">{service.tech}</span>}
//                     </p>
//                   </div>

//                   {/* Button at the bottom */}
//                   <button className="mt-4 flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-purple-600 transition-colors cursor-pointer">
//                     {isExpanded ? "Show Less ↑" : "View Details ↓"}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Show More/Less Button */}
//           <div className="flex justify-center mt-16">
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(109, 40, 217, 0.3)" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setShowAllServices(!showAllServices);
//                 setExpandedIndex(null); // Collapse all cards when toggling view
//               }}
//               className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
//             >
//               {showAllServices ? "Show Less Services" : "Explore All Services"}
//             </motion.button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;




// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const GOLD = "#FEC509";

//   // Services Data
//   const servicesList = [
//     { title: "Web Development", tech: "React, Node.js, Next.js, TailwindCSS", detail: "We build fast, responsive, and SEO-friendly websites that offer exceptional performance and scalability using the latest web technologies.", icon: "💻" },
//     { title: "Mobile Apps", tech: "React Native, Flutter, Kotlin, Swift", detail: "Our team crafts high-quality native and cross-platform mobile applications that provide seamless user experiences on Android and iOS.", icon: "📱" },
//     { title: "UI/UX Design", tech: "Figma, Adobe XD, Photoshop, Illustrator", detail: "We design visually stunning and intuitive user interfaces focused on enhancing usability, engagement, and overall brand identity.", icon: "🎨" },
//     { title: "Backend APIs", tech: "Node.js, Express, Django, Spring Boot", detail: "We create secure, scalable, and efficient RESTful and GraphQL APIs to power your web and mobile applications with robust backend systems.", icon: "🛠️" },
//     { title: "Cloud Solutions", tech: "AWS, Azure, Firebase, Google Cloud", detail: "We help businesses migrate, deploy, and scale their infrastructure on the cloud for better reliability, speed, and global reach.", icon: "☁️" },
//     { title: "AI & ML", tech: "Python, TensorFlow, PyTorch, Scikit-learn", detail: "Our AI specialists develop intelligent systems that automate tasks, analyze data, and deliver smart predictions to drive innovation.", icon: "🤖" },
//     { title: "E-commerce Solutions", tech: "Shopify, WooCommerce, Magento, Stripe", detail: "We build powerful e-commerce platforms that integrate secure payment gateways, inventory systems, and smooth shopping experiences.", icon: "🛒" },
//     { title: "IT Consulting", tech: "Agile, Scrum, ITIL, DevOps", detail: "We provide expert IT consulting to help organizations streamline processes, adopt modern tools, and achieve digital transformation goals.", icon: "🧑‍💼" },
//     { title: "Digital Marketing", tech: "SEO, SEM, Google Analytics, Facebook Ads", detail: "We create targeted digital marketing campaigns that boost your brand visibility, engagement, and conversions across online platforms.", icon: "📈" },
//     { title: "DevOps Services", tech: "Docker, Kubernetes, Jenkins, GitHub Actions", detail: "Our DevOps engineers implement CI/CD pipelines and automation tools to optimize deployment, monitoring, and software delivery cycles.", icon: "⚙️" },
//   ];

//   const displayedServices = showAllServices ? servicesList : servicesList.slice(0, 4);

//   return (
//     <div
//       id="services"
//       className="min-h-screen bg-[#1D1E22] pt-24 pb-20 text-white"
//     >
//       <style jsx="true">
//         {`
//           .service-card:hover {
//             cursor: pointer;
//           }
//         `}
//       </style>

//       <section className="px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-extrabold mb-4" style={{ color: GOLD }}>
//               Our Core Services 🚀
//             </h2>
//             <p className="text-gray-300 max-w-3xl mx-auto text-2xl">
//               We provide powerful and innovative software solutions to help businesses grow using the latest technologies.
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <motion.div
//             layout
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {displayedServices.map((service, index) => {
//               const isExpanded = expandedIndex === index;

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   onClick={() =>
//                     setExpandedIndex(isExpanded ? null : index)
//                   }
//                   className={`service-card bg-white text-black rounded-xl shadow-lg p-6 flex flex-col justify-start cursor-pointer transition-all duration-500 
//                     border-t-4 ${isExpanded ? "border-[#FEC509]" : "border-[#FEC509]"} 
//                     hover:shadow-2xl hover:border-[#d6a408] ${
//                       isExpanded ? "row-span-2" : "h-auto"
//                     }`}
//                 >
//                   {/* Icon */}
//                   <div
//                     className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border"
//                     style={{
//                       background: "#FFF7DA",
//                       borderColor: GOLD,
//                       color: "#000",
//                     }}
//                   >
//                     <span>{service.icon}</span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>

//                   {/* Detail / Tech */}
//                   <div className="flex-grow">
//                     <p className="text-gray-700 text-md leading-relaxed">
//                       {isExpanded ? (
//                         service.detail
//                       ) : (
//                         <span
//                           className="font-semibold"
//                           style={{ color: "#000" }}
//                         >
//                           {service.tech}
//                         </span>
//                       )}
//                     </p>
//                   </div>

//                   {/* Bottom Button */}
//                   <button
//                     className="mt-4 flex items-center gap-2 font-semibold text-sm transition-colors cursor-pointer"
//                     style={{ color: GOLD }}
//                   >
//                     {isExpanded ? "Show Less ↑" : "View Details ↓"}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Explore Button */}
//           <div className="flex justify-center mt-16">
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 15px rgba(254, 197, 9, 0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setShowAllServices(!showAllServices);
//                 setExpandedIndex(null);
//               }}
//               className="px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 cursor-pointer text-black"
//               style={{
//                 background:
//                   "linear-gradient(90deg, #FEC509 0%, #d6a408 100%)",
//               }}
//             >
//               {showAllServices ? "Show Less Services" : "Explore All Services"}
//             </motion.button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;




// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const GOLD = "#FEC509";

//   // Services Data
//   const servicesList = [
//     { title: "Web Development", tech: "React, Node.js, Next.js, TailwindCSS", detail: "We build fast, responsive, and SEO-friendly websites that offer exceptional performance and scalability using the latest web technologies.", icon: "💻" },
//     { title: "Mobile Apps", tech: "React Native, Flutter, Kotlin, Swift", detail: "Our team crafts high-quality native and cross-platform mobile applications that provide seamless user experiences on Android and iOS.", icon: "📱" },
//     { title: "UI/UX Design", tech: "Figma, Adobe XD, Photoshop, Illustrator", detail: "We design visually stunning and intuitive user interfaces focused on enhancing usability, engagement, and overall brand identity.", icon: "🎨" },
//     { title: "Backend APIs", tech: "Node.js, Express, Django, Spring Boot", detail: "We create secure, scalable, and efficient RESTful and GraphQL APIs to power your web and mobile applications with robust backend systems.", icon: "🛠️" },
//     { title: "Cloud Solutions", tech: "AWS, Azure, Firebase, Google Cloud", detail: "We help businesses migrate, deploy, and scale their infrastructure on the cloud for better reliability, speed, and global reach.", icon: "☁️" },
//     { title: "AI & ML", tech: "Python, TensorFlow, PyTorch, Scikit-learn", detail: "Our AI specialists develop intelligent systems that automate tasks, analyze data, and deliver smart predictions to drive innovation.", icon: "🤖" },
//     { title: "E-commerce Solutions", tech: "Shopify, WooCommerce, Magento, Stripe", detail: "We build powerful e-commerce platforms that integrate secure payment gateways, inventory systems, and smooth shopping experiences.", icon: "🛒" },
//     { title: "IT Consulting", tech: "Agile, Scrum, ITIL, DevOps", detail: "We provide expert IT consulting to help organizations streamline processes, adopt modern tools, and achieve digital transformation goals.", icon: "🧑‍💼" },
//     { title: "Digital Marketing", tech: "SEO, SEM, Google Analytics, Facebook Ads", detail: "We create targeted digital marketing campaigns that boost your brand visibility, engagement, and conversions across online platforms.", icon: "📈" },
//     { title: "DevOps Services", tech: "Docker, Kubernetes, Jenkins, GitHub Actions", detail: "Our DevOps engineers implement CI/CD pipelines and automation tools to optimize deployment, monitoring, and software delivery cycles.", icon: "⚙️" },
//   ];

//   const displayedServices = showAllServices ? servicesList : servicesList.slice(0, 4);

//   return (
//     <div id="services" className="min-h-screen bg-[#1D1E22] pt-24 pb-20 text-white">
//       <style jsx="true">
//         {`
//           .service-card:hover {
//             cursor: pointer;
//           }
//         `}
//       </style>

//       <section className="px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto">

//           {/* Heading Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-extrabold mb-4" style={{ color: GOLD }}>
//               Our Core Services 🚀
//             </h2>
//             <p className="text-gray-300 max-w-3xl mx-auto text-2xl">
//               We provide powerful and innovative software solutions to help businesses grow using the latest technologies.
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <motion.div
//   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
// >

//             {displayedServices.map((service, index) => {
//               const isExpanded = expandedIndex === index;

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 0.5,
//                     layout: { duration: 0.4, ease: "easeInOut" },
//                   }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   onClick={() =>
//                     setExpandedIndex(isExpanded ? null : index)
//                   }
//                  className={`service-card bg-white text-black rounded-xl shadow-lg p-6
//   flex flex-col justify-start self-start cursor-pointer transition-all duration-500
//   border-t-4 border-[#FEC509] hover:shadow-2xl hover:border-[#d6a408]
//   ${isExpanded ? "min-h-fit" : "min-h-[260px]"} `}


//                 >
//                   {/* Icon */}
//                   <div
//                     className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border"
//                     style={{
//                       background: "#FFF7DA",
//                       borderColor: GOLD,
//                       color: "#000",
//                     }}
//                   >
//                     <span>{service.icon}</span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>

//                   {/* Detail / Tech */}
//                   <div className="flex-grow">
//                     <p className="text-gray-700 text-md leading-relaxed">
//                       {isExpanded ? (
//                         service.detail
//                       ) : (
//                         <span className="font-semibold" style={{ color: "#000" }}>
//                           {service.tech}
//                         </span>
//                       )}
//                     </p>
//                   </div>

//                   {/* Bottom Button */}
//                   <button
//                     className="mt-4 flex items-center gap-2 font-semibold text-sm transition-colors cursor-pointer"
//                     style={{ color: GOLD }}
//                   >
//                     {isExpanded ? "Show Less ↑" : "View Details ↓"}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Explore Button */}
//           <div className="flex justify-center mt-16">
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 15px rgba(254, 197, 9, 0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setShowAllServices(!showAllServices);
//                 setExpandedIndex(null);
//               }}
//               className="px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 cursor-pointer text-black"
//               style={{
//                 background: "linear-gradient(90deg, #FEC509 0%, #d6a408 100%)",
//               }}
//             >
//               {showAllServices ? "Show Less Services" : "Explore All Services"}
//             </motion.button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;








// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const GOLD = "#FEC509";

//   // --- NEW CATEGORY-BASED SERVICES ---
//   const servicesList = [
//     {
//       title: "A/C & HVAC Services",
//       icon: "❄️",
//       services: [
//         "A/C Installation",
//         "A/C Repair",
//         "Heater Installation",
//         "Appliance Installation",
//         "Commercial Services"
//       ]
//     },
//     {
//       title: "Electrical Installation",
//       icon: "⚡",
//       services: [
//         "Electrical Panel Installation",
//         "EV Charging Station Installation",
//         "Lighting Installation",
//         "Circuit Breaker Installation & Replacement",
//         "Outlet Installation",
//         "Wiring Installation"
//       ]
//     },
//     {
//       title: "Electrical Repair",
//       icon: "🛠️",
//       services: [
//         "Electrical Panel Repair",
//         "Lighting Repair",
//         "Doorbell Repair",
//         "Circuit Breaker Repair",
//         "Outlet Repair",
//         "Wiring Repair"
//       ]
//     },
//     {
//       title: "Smart Home & Automation",
//       icon: "🏠",
//       services: [
//         "Motorized Blinds Installation",
//         "Garage Control Integration",
//         "Home Automation System Repair",
//         "Lighting Control System Installation",
//         "Smart Thermostat Installation",
//         "Video Doorbell Installation"
//       ]
//     },
//     {
//       title: "Security & Safety",
//       icon: "🛡️",
//       services: [
//         "Security System Installation",
//         "Security System Repair",
//         "Smoke Detector Installation",
//         "Doorbell Installation & Replacement",
//         "Virtual Consultations"
//       ]
//     },
//     {
//       title: "Home Entertainment",
//       icon: "📺",
//       services: [
//         "Home Theatre Installation",
//         "Whole-Home Audio/Video Installation"
//       ]
//     },
//     {
//       title: "Networking & Communication",
//       icon: "🌐",
//       services: [
//         "Home Network Integration",
//         "Home Phone System Installation"
//       ]
//     }
//   ];

//   return (
//     <div id="services" className="min-h-screen bg-[#1D1E22] pt-24 pb-20 text-white">
//       <section className="px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto">

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-extrabold mb-4" style={{ color: GOLD }}>
//               Our Electrical Services ⚡
//             </h2>
//             <p className="text-gray-300 max-w-3xl mx-auto text-2xl">
//               Professional, reliable, and expert electrical solutions for your home or business.
//             </p>
//           </motion.div>

//           {/* Category Grid */}
//           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

//             {servicesList.map((service, index) => {
//               const isExpanded = expandedIndex === index;

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   onClick={() =>
//                     setExpandedIndex(isExpanded ? null : index)
//                   }
//                   className={`service-card bg-white text-black rounded-xl shadow-lg p-6
//                     flex flex-col justify-start self-start cursor-pointer transition-all duration-500
//                     border-t-4 border-[#FEC509] hover:shadow-2xl hover:border-[#d6a408]
//                     ${isExpanded ? "min-h-fit" : "min-h-[220px]"}
//                   `}
//                 >

//                   {/* Icon */}
//                   <div
//                     className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border"
//                     style={{
//                       background: "#FFF7DA",
//                       borderColor: GOLD,
//                     }}
//                   >
//                     <span>{service.icon}</span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>

//                   {/* Expanded Services */}
//                   {isExpanded && (
//                     <ul className="mt-2 text-gray-700 space-y-2">
//                       {service.services.map((s, i) => (
//                         <li key={i} className="flex items-center gap-2">
//                           <span className="text-yellow-500">•</span> {s}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {/* Button */}
//                   <button
//                     className="mt-4 px-4 py-2 rounded-md text-sm font-semibold border border-[#FEC509]"
//                     style={{ color: GOLD }}
//                   >
//                     {isExpanded ? "Show Less" : "Show More"}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;







// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// import { GiAutoRepair } from "react-icons/gi";

// const GOLD = "#FEC509";

// const Percs = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const steps = [
//     {
//       icon: <TbAlertTriangle />,
//       title: "Identify Problem",
//       desc: "We quickly detect electrical faults, overheating, burning smells, short circuits and more.",
//       step: "Step 01",
//     },
//     {
//       icon: <TbPlug />,
//       title: "Provide time & cost",
//       desc: "We estimate the work duration, repair cost, and materials needed with full transparency.",
//       step: "Step 02",
//     },
//     {
//       icon: <TbBulb />,
//       title: "Start the repair",
//       desc: "We begin repair only after your approval, ensuring complete safety and quality.",
//       step: "Step 03",
//     },
//     {
//       icon: <GiAutoRepair />,
//       title: "Final testing",
//       desc: "We test all repaired connections, switches, and wiring to ensure everything is safe.",
//       step: "Step 04",
//     },
//     {
//       icon: <TbPlug />,
//       title: "Cleanup & finish",
//       desc: "We clean the area and make sure everything is left in perfect working condition.",
//       step: "Step 05",
//     },
//     {
//       icon: <TbBulb />,
//       title: "Customer satisfaction",
//       desc: "We verify that everything works correctly and you are fully satisfied.",
//       step: "Step 06",
//     },
//   ];

//   const visibleCards = showAll ? steps : steps.slice(0, 3);

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full py-16 bg-black text-white flex flex-col items-center">

//       {/* GRID */}
//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%]"
//       >
//         {visibleCards.map((item, index) => {
//           const isExpanded = expandedIndex === index;
//           return (
//             <motion.div
//               key={index}
//               layout
//               onClick={() => toggleExpand(index)}
//               className={`
//                 service-card bg-[#121212] text-white rounded-xl shadow-lg p-6
//                 flex flex-col items-center justify-start self-start cursor-pointer
//                 transition-all duration-500 border border-[#1f1f1f]
//                 hover:border-[#2a2a2a]
//                 ${isExpanded ? "h-auto" : "min-h-[300px]"}
//               `}
//             >
//               {/* ICON CIRCLE */}
//               <div className="h-16 w-16 mb-6 flex items-center justify-center 
//                               rounded-full bg-[#FEC509] text-black text-3xl">
//                 {item.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="text-lg font-semibold text-center">{item.title}</h3>

//               {/* DESCRIPTION */}
//               <p className="text-sm text-gray-400 mt-2 text-center">
//                 {isExpanded ? item.desc : item.desc.slice(0, 60) + "..."}
//               </p>

//               {/* BUTTON */}
//               <button className="mt-6 bg-[#FEC509] text-black font-semibold 
//                                 py-2 px-6 rounded-md hover:bg-[#e5b100] transition-all">
//                 {item.step}
//               </button>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* SHOW MORE / SHOW LESS BUTTON */}
//       {steps.length > 3 && (
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="mt-10 bg-[#FEC509] text-black font-semibold py-2 px-8 
//                      rounded-md hover:bg-[#e5b100] transition-all"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default Percs;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const GOLD = "#FEC509";

  // --- NEW CATEGORY-BASED SERVICES ---
  const servicesList = [
    {
      title: "A/C & HVAC Services",
      icon: "❄️",
      services: [
        "A/C Installation",
        "A/C Repair",
        "Heater Installation",
        "Appliance Installation",
        "Commercial Services",
      ],
    },
    {
      title: "Electrical Installation",
      icon: "⚡",
      services: [
        "Electrical Panel Installation",
        "EV Charging Station Installation",
        "Lighting Installation",
        "Circuit Breaker Installation & Replacement",
        "Outlet Installation",
        "Wiring Installation",
      ],
    },
    {
      title: "Electrical Repair",
      icon: "🛠️",
      services: [
        "Electrical Panel Repair",
        "Lighting Repair",
        "Doorbell Repair",
        "Circuit Breaker Repair",
        "Outlet Repair",
        "Wiring Repair",
      ],
    },
    {
      title: "Smart Home & Automation",
      icon: "🏠",
      services: [
        "Motorized Blinds Installation",
        "Garage Control Integration",
        "Home Automation System Repair",
        "Lighting Control System Installation",
        "Smart Thermostat Installation",
        "Video Doorbell Installation",
      ],
    },
    {
      title: "Security & Safety",
      icon: "🛡️",
      services: [
        "Security System Installation",
        "Security System Repair",
        "Smoke Detector Installation",
        "Doorbell Installation & Replacement",
        "Virtual Consultations",
      ],
    },
    {
      title: "Home Entertainment",
      icon: "📺",
      services: [
        "Home Theatre Installation",
        "Whole-Home Audio/Video Installation",
      ],
    },
    {
      title: "Networking & Communication",
      icon: "🌐",
      services: [
        "Home Network Integration",
        "Home Phone System Installation",
      ],
    },
  ];

  // Show first 3 if showAll is false
  const visibleItems = showAll ? servicesList : servicesList.slice(0, 3);

  return (
    <div
      id="services"
      className="min-h-screen bg-[#1D1E22] pt-24 pb-20 text-white"
    >
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: GOLD }}
            >
              Our Electrical Services ⚡
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-2xl">
              Professional, reliable, and expert electrical solutions for your
              home or business.
            </p>
          </motion.div>

          {/* CATEGORY GRID */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {visibleItems.map((service, index) => {
              const realIndex = servicesList.indexOf(service);
              const isExpanded = expandedIndex === realIndex;

              return (
                <motion.div
                  key={realIndex}
                  layout
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : realIndex)
                  }
                  className={`service-card bg-white text-black rounded-xl shadow-lg p-6
                    flex flex-col justify-start self-start cursor-pointer transition-all duration-500
                    border-t-4 border-[#FEC509] hover:shadow-2xl hover:border-[#d6a408]
                    ${isExpanded ? "min-h-fit" : "min-h-[220px]"}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border"
                    style={{
                      background: "#FFF7DA",
                      borderColor: GOLD,
                    }}
                  >
                    <span>{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                  {/* Expanded Services */}
                  {isExpanded && (
                    <ul className="mt-2 text-gray-700 space-y-2">
                      {service.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button */}
                  <button
                    className="mt-4 px-4 py-2 rounded-md text-sm font-semibold border border-[#FEC509]"
                    style={{ color: GOLD }}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* SHOW MORE / SHOW LESS BUTTON */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => {
                setShowAll(!showAll);
                setExpandedIndex(null); // reset expansions
              }}
              className="px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition-all duration-300"
              style={{ backgroundColor: GOLD }}
            >
              {showAll ? "Show Less" : "Show More Services"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
