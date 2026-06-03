import { motion } from "framer-motion";
import { useEffect } from "react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (window.lenis) {
      window.lenis.stop();
    }
    return () => {
      document.body.style.overflow = "auto";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
   overflow-hidden backdrop-blur-sm"
      // onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl 
        bg-linear-to-l from-midnight to-navy border-white/10
        flex flex-col max-h-[95vh] overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-4 right-4
         bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" alt="Close" className="w-6 h-6" />
        </button>
        <div className="w-full h-68 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-t-2xl object-cover-"
          />
        </div>
        <div className="p-6 overflow-y-auto min-h-0 flex-1">
          <h5 className="mb-2 text-2xl font-bold text-white"> {title} </h5>
          <p className="mb-3 font-normal text-neutral-400"> {description} </p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  src={tag.path}
                  alt={tag.name}
                  key={tag.id}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <img
                src="assets/arrow-up.svg"
                alt="arrw up"
                className="size-4"
                href={href}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

//horizotal alignment
// import React from "react";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   closeModal,
// }) => {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
//       onClick={closeModal}
//     >
//       <div
//         className="relative w-full max-w-4xl border shadow-xl rounded-2xl overflow-hidden
//           bg-gradient-to-l from-midnight to-navy border-white/10
//           flex flex-col md:flex-row max-h-[90vh]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close button */}
//         <button
//           onClick={closeModal}
//           className="absolute p-2 rounded-sm top-4 right-4 z-10
//             bg-midnight hover:bg-gray-500 transition-colors"
//         >
//           <img src="assets/close.svg" alt="Close" className="w-5 h-5" />
//         </button>

//         {/* LEFT — Project image */}
//         <div className="md:w-1/2 flex-shrink-0">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-48 md:h-full object-cover"
//           />
//         </div>

//         {/* RIGHT — Content */}
//         <div className="md:w-1/2 flex flex-col justify-between p-6 overflow-y-auto">
//           <div>
//             <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
//             <p className="mb-3 text-sm font-normal text-neutral-400">{description}</p>

//             <ul className="space-y-2">
//               {subDescription.map((subDesc, index) => (
//                 <li
//                   key={index}
//                   className="text-sm font-normal text-neutral-400 flex gap-2"
//                 >
//                   <span className="text-blue-400 mt-1">•</span>
//                   {subDesc}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Footer — tags + link */}
//           <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
//             <div className="flex gap-2 flex-wrap">
//               {tags.map((tag) => (
//                 <img
//                   src={tag.path}
//                   alt={tag.name}
//                   key={tag.id}
//                   className="rounded-lg size-9 hover-animation"
//                 />
//               ))}
//             </div>

//             <a
//               href={href}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-1 text-sm font-medium
//                 text-white hover:text-blue-400 transition-colors hover-animation"
//             >
//               View Project
//               <img src="assets/arrow-up.svg" alt="arrow up" className="size-4" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

//vertical alignment
// import React from "react";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   closeModal,
// }) => {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
//       onClick={closeModal}
//     >
//       <div
//         className="relative w-full max-w-2xl border shadow-xl rounded-2xl overflow-hidden
//           bg-gradient-to-l from-midnight to-navy border-white/10
//           flex flex-col max-h-[90vh]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close button */}
//         <button
//           onClick={closeModal}
//           className="absolute p-2 rounded-sm top-4 right-4 z-10
//             bg-midnight hover:bg-gray-500 transition-colors"
//         >
//           <img src="assets/close.svg" alt="Close" className="w-5 h-5" />
//         </button>

//         {/* TOP — Project image */}
//         <div className="w-full h-52 flex-shrink-0">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover rounded-t-2xl"
//           />
//         </div>

//         {/* BOTTOM — Content (scrollable if needed) */}
//         <div className="flex flex-col justify-between p-6 overflow-y-auto flex-1">
//           <div>
//             <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
//             <p className="mb-3 text-sm font-normal text-neutral-400">{description}</p>

//             <ul className="space-y-2">
//               {subDescription.map((subDesc, index) => (
//                 <li
//                   key={index}
//                   className="text-sm font-normal text-neutral-400 flex gap-2"
//                 >
//                   <span className="text-blue-400 mt-1">•</span>
//                   {subDesc}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Footer — tags + link */}
//           <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
//             <div className="flex gap-2 flex-wrap">
//               {tags.map((tag) => (
//                 <img
//                   src={tag.path}
//                   alt={tag.name}
//                   key={tag.id}
//                   className="rounded-lg size-9 hover-animation"
//                 />
//               ))}
//             </div>

//             <a
//               href={href}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-1 text-sm font-medium
//                 text-white hover:text-blue-400 transition-colors hover-animation"
//             >
//               View Project
//               <img src="assets/arrow-up.svg" alt="arrow up" className="size-4" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
