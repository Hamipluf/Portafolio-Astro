import React, { useRef } from "react";
import { inView, animate } from "framer-motion/dom";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Project } from "@/styles/interfaces/project";

const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 15.5 / 2;

const AnimatedCard: React.FC<{
  project: Project;
  openModal: (project: Project) => void;
}> = ({ project, openModal }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];
    // @ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1.5;
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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative min-h-40 max-w-lg rounded-xl bg-inherit"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="card bg-base-100 shadow-xl image-full"
      >
        {project.image && (
          <figure>
            <img className="" src={project.image} alt={project.slug} />
          </figure>
        )}
        <div className="card-body ">
          <h2
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="card-title text-slate-50"
          >
            {project.title}
          </h2>
          <p
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="text-slate-200"
          >
            {project.subtitle}
          </p>
          <div className="card-actions justify-end">
            <button
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="btn btn-primary hover:btn-accent btn-square z-30"
              onClick={() => openModal(project)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
