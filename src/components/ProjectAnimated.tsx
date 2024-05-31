import React, { useRef, useState } from "react";
import AnimatedCard from "./AnimatedCard";
import type { Project } from "@/utils/interfaces/project";
import { AnimatePresence, useInView } from "framer-motion";
import "../styles/index.css";
import { getI18N } from "@/i18n";

const ProjectsAnimated: React.FC<{
  projects: Project[];
  currentLocale: string | undefined;
}> = ({ projects, currentLocale }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const i18n = getI18N({ currentLocale });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openModalProject = (project: Project) => {
    setSelectedProject(project);
    const modal = document.getElementById(project.slug) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  const openMoreProjects = () => {
    const modal = document.getElementById("more_projects") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModalMoreProjects = () => {
    const modal = document.getElementById("more_projects") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full my-5">
        <div className="self-end mx-12">
          <button
            onClick={() => openMoreProjects()}
            className="group relative right-0 overflow-hidden bg-secondary focus:ring-4 focus:ring-accent inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
          >
            <span className="z-40">{i18n.PROJECTS.MORE_BUTTON}</span>
            <svg
              className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
          </button>
        </div>
        <AnimatePresence mode="sync">
          <div
            ref={ref}
            className="h-full w-full lg:grid lg:grid-cols-2 lg:gap-5 lg:m-4 lg:p-4 overflow-hidden"
          >
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <AnimatedCard project={project} openModal={openModalProject} />
              </div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <dialog id="more_projects" className="modal">
        <div className="modal-box max-w-max bg-primary">
          <form method="dialog">
            <button
              onClick={() => closeModalMoreProjects()}
              className="btn btn-xs btn-circle btn-secondary absolute right-4 top-4"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl underline underline-offset-2 py-4">
            {i18n.PROJECTS.MORE_TITLE}
          </h3>
          <div className="h-20 carousel carousel-vertical rounded-box">
            {projects.slice(4, projects.length).map((project) => (
              <div
                key={project.id}
                className="carousel-item h-full"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <AnimatedCard project={project} openModal={openModalProject} />
              </div>
            ))}
          </div>
        </div>
      </dialog>

      {selectedProject && (
        <dialog id={selectedProject.slug} className="modal ">
          <div className="modal-box glass p-2 ">
            <form method="dialog">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-xs btn-circle btn-secondary absolute right-4 top-4"
              >
                ✕
              </button>
            </form>
            <div className="flex w-full flex-col rounded-xl bg-primary bg-clip-border text-gray-700 shadow-md">
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
                    selectedProject.finished ? "badge-accent" : "badge-error"
                  } badge-outline`}
                >
                  {selectedProject.finished ? "Finalizado" : "En desarrollo..."}
                </div>
                <h3 className="mb-2 block text-accent text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {selectedProject.title}
                </h3>
                <p className="mb-8 block secondary-text text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {selectedProject.description}
                </p>
                <div className="flex gap-x-4 justify-end w-full">
                  {selectedProject.demo_url && (
                    <a
                      href={selectedProject.demo_url}
                      target="_blank"
                      className="relative group overflow-hidden px-4 h-8 rounded-full flex space-x-2 items-center bg-gradient-to-r from-secondary to-base-100 hover:to-secondary transition-all duration-200 ease-in-out"
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
                    className="relative group overflow-hidden px-4 h-8 rounded-full flex space-x-2 items-center bg-gradient-to-r from-secondary to-base-100 hover:to-secondary transition-all duration-200 ease-in-out"
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
                <div className="divider divider-base-100 my-0"></div>
                <p className="text-md secondary-text font-semibold underline underline-offset-2 mb-2">
                  Desarrollo
                </p>
                <div className="flex gap-x-4 gap-y-2 w-full flex-wrap">
                  {selectedProject.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="badge badge-secondary badge-outline"
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
