import React, { useRef } from "react";
<<<<<<< HEAD
import { truncateText } from "@/utils/truncateText";
=======

>>>>>>> adf55566b67ecd810e90c3d8e046239478612774
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Project } from "@/styles/interfaces/project";

const ROTATION_RANGE = 34.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const AnimatedCard: React.FC<{
  project: Project;
  openModal: (project: Project) => void;
}> = ({ project, openModal }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

<<<<<<< HEAD
  const xSpring = useSpring(x, { duration: .5, damping: 30 });
  const ySpring = useSpring(y, { duration: 1, damping: 30 });
=======
  const xSpring = useSpring(x, { duration: 0.5, damping: 15 });
  const ySpring = useSpring(y, { duration: 0.5, damping: 15 });
>>>>>>> adf55566b67ecd810e90c3d8e046239478612774

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];
    // @ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };



  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
<<<<<<< HEAD
      className="card card-side bg-secondary bg-opacity-20 shadow-xl h-56"
=======
      className="relative min-h-40 max-w-lg rounded-xl"
>>>>>>> adf55566b67ecd810e90c3d8e046239478612774
    >
      {project && project.image && (
        <figure
          style={{
            transform: "translateZ(90px)",
            transformStyle: "preserve-3d",
          }}
          className="m-2 shadow-2xl"
        >
          <img
          
            className="rounded-md w-40 h-full object-cover object-left "
            src={project.image}
            alt={project.slug}
          />
        </figure>
      )}
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
<<<<<<< HEAD
        className="card-body"
      >
        <h2
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="card-title"
        >
          {project.title}
        </h2>
        <p
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="max-w-72"
        >
          {truncateText(project.description, 12)}
        </p>
=======
        className="card shadow-xl image-full"
      >
        {project.image && (
          <figure className="bg-white opacity-60">
            <img src={project.image} alt={project.slug} />
          </figure>
        )}
>>>>>>> adf55566b67ecd810e90c3d8e046239478612774
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="card-actions justify-end"
        >
          <button
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
<<<<<<< HEAD
            onClick={() => openModal(project)}
            className="btn btn-accent px-2 shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-info-square"
=======
            className="card-title base-text"
          >
            {project.title}
          </h2>
          <p
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="base-text"
          >
            {project.subtitle}
          </p>
          <div className="card-actions justify-end">
            <button
>>>>>>> adf55566b67ecd810e90c3d8e046239478612774
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 9h.01" />
              <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
              <path d="M11 12h1v4h1" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
// <motion.div
// onMouseMove={handleMouseMove}
// onMouseLeave={handleMouseLeave}
// ref={ref}
// style={{
//   transformStyle: "preserve-3d",
//   transform,
//   backgroundImage: `url('${project.image}')`,
//   backgroundSize: "contain",
//   backgroundPosition: "center",
// }}
//   className="relative min-h-40 max-w-lg rounded-xl"
// >
//   <div
// style={{
//   transform: "translateZ(75px)",
//   transformStyle: "preserve-3d",
// }}
//     className="card shadow-2xl"
//   >
//     <div
//       style={{
//         transform: "translateZ(75px)",
//         transformStyle: "preserve-3d",
//       }}
//       className="card-body"
//     >
//       <h2
//         style={{
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="card-title text-slate-50"
//       >
//         {project.title}
//       </h2>
//       <p
//         style={{
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="secondary-text"
//       >
//         {project.subtitle}
//       </p>
//       <div className="card-actions justify-end">
//         <button
//           onClick={() => openModal(project)}
//           style={{
//             transform: "translateZ(75px)",
//             transformStyle: "preserve-3d",
//           }}
//           className="btn btn-primary hover:btn-accent btn-square z-30"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
//             style={{
//               transform: "translateZ(75px)",
//               transformStyle: "preserve-3d",
//             }}
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
//             <path d="M12 9h.01" />
//             <path d="M11 12h1v4h1" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// </motion.div>
