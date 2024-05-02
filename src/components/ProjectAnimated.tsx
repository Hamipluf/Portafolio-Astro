import React, { useRef, useState } from "react";
import AnimatedCard from "./AnimatedCard";
import type { Project } from "@/styles/interfaces/project";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface ProjectsAnimatedProps {
  projects: Project[];
}

const ProjectsAnimated: React.FC<ProjectsAnimatedProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const openModal = (project: Project) => {
    setSelectedProject(project);
    const modal = document.getElementById(project.slug) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <AnimatePresence mode="sync">
        <div ref={ref} className="flex justify-center items-center flex-wrap gap-10 h-full w-full">
          {projects.map((project) => (
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              key={project.id}
            >
              <AnimatedCard project={project} openModal={openModal} />
            </div>
          ))}
        </div>
      </AnimatePresence>

      {selectedProject && (
        <dialog id={selectedProject.slug} className="modal ">
          <div className="modal-box glass p-2 ">
            <form method="dialog">
              <button
                onClick={closeModal}
                className="btn btn-xs btn-circle btn-primary absolute right-4 top-4"
              >
                ✕
              </button>
            </form>
            <div className="flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.slug}
                    className="h-3/5 w-full object-cover object-center"
                  />
                )}
              </div>
              <div className="p-6">
                <div
                  className={`badge ${
                    selectedProject.finished ? "badge-primary" : "badge-error"
                  } badge-outline`}
                >
                  {selectedProject.finished ? "Finalizado" : "En desarrollo..."}
                </div>
                <h3 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {selectedProject.title}
                </h3>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {selectedProject.description}
                </p>
                <div className="flex gap-x-4 justify-end w-full">
                  {selectedProject.demo_url && (
                    <a
                      href={selectedProject.demo_url}
                      target="_blank"
                      className="relative group overflow-hidden px-4 h-8 rounded-full flex space-x-2 items-center bg-gradient-to-r from-primary to-primary hover:to-secondary transition-all duration-200 ease-in-out"
                    >
                      <span className="relative text-sm text-white">Demo</span>
                      <div className="flex items-center -space-x-3 translate-x-3">
                        <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="relative group overflow-hidden px-4 h-8 rounded-full flex space-x-2 items-center bg-gradient-to-r from-primary to-primary hover:to-secondary transition-all duration-200 ease-in-out"
                  >
                    <span className="relative text-sm text-white">Code</span>
                    <div className="flex items-center -space-x-3 translate-x-3">
                      <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="divider divider-primary my-0"></div>
                <p className="text-md font-semibold underline underline-offset-2 mb-2">
                  Desarrollo
                </p>
                <div className="flex gap-x-4 gap-y-2 w-full flex-wrap">
                  {selectedProject.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="badge badge-primary badge-outline"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ProjectsAnimated;
