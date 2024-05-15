import React, { useRef } from "react";
import { truncateText } from "@/utils/truncateText";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Project } from "@/utils/interfaces/project";

const ROTATION_RANGE = 34.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const AnimatedCard: React.FC<{
  project: Project;
  openModal: (project: Project) => void;
}> = ({ project, openModal }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { duration: 0.5, damping: 30 });
  const ySpring = useSpring(y, { duration: 1, damping: 30 });

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

  const image = `../../${project.image}`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="card card-side bg-secondary bg-opacity-20 shadow-xl h-56"
    >
      <figure
        style={{
          transform: "translateZ(90px)",
          transformStyle: "preserve-3d",
        }}
        className="m-2 shadow-2xl"
      >
        <img
          className="rounded-md w-40 h-full object-cover object-left "
          src={image}
          alt={project.slug}
        />
      </figure>
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
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
