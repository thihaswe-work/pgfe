export default function Page() {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    // Add a node to the end of the list
    append(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode; // First node in the list
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }

    // Log the entire list
    log() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }
  }

  // Create a LinkedList and add some nodes
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(15);

  // Log the linked list
  list.log(); // Output: 5 10 15\
  console.log(list.head);
  const node1 = new ListNode(1);
  const node2 = new ListNode(12, node1);
  const node3 = new ListNode(13, node2);
  console.log(node3);
  return <div></div>;
}

// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Upper = () => {
//   const photoRef1 = useRef<HTMLDivElement>(null);
//   const photoRef2 = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);

//   const [scale1, setScale1] = useState(1);
//   const [scale2, setScale2] = useState(1);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;

//     // Shrink Image 1 immediately
//     if (photoRef1.current) {
//       const shrinkFactor1 = Math.max(1 - scrollPosition / 500, 0.1);
//       setScale1(shrinkFactor1);
//     }

//     // Shrink Image 2 when it reaches the bottom of the sticky header
//     if (photoRef2.current && headerRef.current) {
//       const headerBottom = headerRef.current.getBoundingClientRect().bottom;
//       const photoTop = photoRef2.current.getBoundingClientRect().top;

//       if (photoTop < headerBottom + 100) {
//         const shrinkFactor2 = Math.max(
//           1 - (headerBottom - photoTop + 100) / 300,
//           0.1
//         );
//         setScale2(shrinkFactor2);
//       } else if (photoTop > headerBottom) {
//         const shrinkFactor2 = Math.min(1, 1 - (headerBottom - photoTop) / 300);
//         setScale2(shrinkFactor2);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Sticky Header */}
//       <div
//         ref={headerRef}
//         className="font-bold text-[65px] 2xl:text-[120px] sticky top-0 bg-background w-full z-10"
//       >
//         <div className="container mx-auto text-center">
//           <div className="flex gap-5 justify-center">
//             <span>Inspire</span>
//             <span className="text-textColor">Creativity,</span>
//           </div>
//           <div className="flex justify-center gap-5">
//             <span className="text-textColor">Enrich</span>
//             <span>Life</span>
//           </div>
//         </div>
//       </div>

//       {/* Image 1 */}
//       <div className="flex flex-col container mx-auto">
//         <div
//           className="bg-red-200 h-screen flex justify-center"
//           ref={photoRef1}
//         >
//           <Image
//             src="/home.svg"
//             alt="home image"
//             width={100}
//             height={100}
//             className="object-cover w-full h-[672px]"
//             style={{ transform: `scale(${scale1})` }}
//           />
//         </div>

//         {/* Image 2 */}
//         <div
//           className="bg-green-200 h-screen flex justify-center"
//           ref={photoRef2}
//         >
//           <Image
//             src="/logo.png"
//             alt="home image"
//             width={100}
//             height={100}
//             className="object-cover bg-purple-500 w-full h-[500px]"
//             style={{ transform: `scale(${scale2})` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Upper;
