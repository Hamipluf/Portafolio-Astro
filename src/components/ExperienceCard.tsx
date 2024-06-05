import { getI18N } from "@/i18n";
import React from "react";
const ExperienceCard: React.FC<{ currentLocale: string | undefined }> = ({
  currentLocale,
}) => {
  const i18n = getI18N({ currentLocale });

  return (
    <>
      <div className="flex m-4 items-center xw-full">
        <div>
          <h2 className="text-xl text-accent font-semibold m-4 underline underline-offset-4 shadow-xl">
            {i18n.EXPERIENCIE.TITLE}
          </h2>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical h-full m-10">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 mx-2 text-accent">
            <time className="font-mono italic">{i18n.EXPERIENCIE["JOB-1"].DATE}</time>
            <div className="text-lg font-black">
              {i18n.EXPERIENCIE["JOB-1"].POSITION}{" "}
              <span className="opacity-80 text-sm font-medium text-secondary">
                {i18n.EXPERIENCIE["JOB-1"].COMPANY}
              </span>
            </div>
            {i18n.EXPERIENCIE["JOB-1"].DESCRIPTION}
            <div className="flex justify-end gap-4 w-full my-2">
              <div className="tooltip" data-tip="Node.JS">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs hover:cursor-pointer hover:scale-110 hover:-translate-y-2 duration-150 ease-in-out"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
                  <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
                </svg>
              </div>
              <div className="tooltip" data-tip="Javascript">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript hover:cursor-pointer hover:scale-110 hover:-translate-y-2 duration-150 ease-in-out"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                  <path d="M7.5 8h3v8l-2 -1"></path>
                  <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
                </svg>
              </div>
              <div className="tooltip" data-tip="Github">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </div>
              <div className="tooltip" data-tip="Socket.IO">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-socket-io hover:cursor-pointer hover:scale-110 hover:-translate-y-2 duration-150 ease-in-out"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M11 11h1l3 -4z"></path>
                  <path d="M12 13h1l-4 4z"></path>
                </svg>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
            </svg>
          </div>
          <div className="timeline-end mb-10 text-accent">
            <time className="font-mono italic">{i18n.EXPERIENCIE["JOB-2"].DATE}</time>
            <div className="text-lg font-black">
             {i18n.EXPERIENCIE["JOB-2"].POSITION} {" "}
              <span className="opacity-80 text-sm font-medium text-secondary">
                {i18n.EXPERIENCIE["JOB-2"].COMPANY}
              </span>
            </div>
            {i18n.EXPERIENCIE["JOB-2"].DESCRIPTION}
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
};

export default ExperienceCard;
