// import { useState } from 'react';
// import { Transition } from '@headlessui/react';

// const Arrow = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClick = () => {
//     setIsVisible(false);
//   };

//   return (
//     <div className="relative">
//       <Transition
//         show={isVisible}
//         enter="transition-transform duration-300 ease-in-out"
//         enterFrom="transform -translate-x-10 opacity-100"
//         enterTo="transform translate-x-40 opacity-0"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 cursor-pointer"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           onClick={handleClick}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </svg>
//       </Transition>
//     </div>
//   );
// };

// export default Arrow;