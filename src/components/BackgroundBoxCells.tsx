// export default function GridWithCells() {
//     // Create an array of 100 items for the grid cells
//     const cells = Array.from({ length: 400 }, (_, i) => i)
  
//     return (
//       <div className="w-full h-screen p-4 bg-white">
//         <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-[1px]">
//           {cells.map((cell) => (
//             <div
//               key={cell}
//               className="aspect-square border border-gray-200"
//             />
//           ))}
//         </div>
//       </div>
//     )
//   }
  
//   export default function GridBackground() {
//     return (
//       <div className="w-full  bg-white z-[-2]">
//         <div 
//           className="absolute inset-0 z-[-3]" 
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//               linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
//             `,
//             backgroundSize: '24px 24px',
//           }}
//         />
//       </div>
//     )
//   }

import { ReactNode } from 'react';

export default function GridBackground({ children }: { children: ReactNode }) {
    return (
      <div className="w-full bg-white z-[3]">
        <div
          className="absolute inset-0 z-[2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            WebkitMaskImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
            `,
            maskImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
            `,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
        {children}
      </div>
    );
  }
  