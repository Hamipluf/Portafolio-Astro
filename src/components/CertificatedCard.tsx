import React from "react";
import { motion } from "framer-motion";
import { type Certificated } from "@/styles/interfaces/project";
const CertificatedCard: React.FC<{ certificate: Certificated }> = ({
  certificate,
}) => {
  return (
    <motion.div
      animate={{
        y: [80, 0],
        opacity: [10, 100],
      }}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
      className="mt-10 group overflow-hidden p-8 rounded-xl bg-base-100 h-fit"
    >
      <h3 className="font-mono font-medium mb-4 text-secondary">{certificate.title}</h3>
      {/* Image */}
      <div className="border border-blue-500/10 flex relative  rounded-lg hover:scale-105 hover:translate-y-1 transition-all duration-300 ease-in-out">
        <img
          className="hover:rounded-lg transition-all duration-300 ease-in-out"
          src={certificate.image}
          alt={certificate.id_certificate || ""}
        />
      </div>
      {/* Text */}
      <div className=" mt-6 pb-6">
        <p className="text-secondary">{certificate.description}</p>
      </div>
      {/* BUttons */}
      <div className="flex gap-3 -mb-8 py-4">
        <a
          href={certificate.url}
          target="_blank"
          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
        >
          <span>Ver certifiicado</span>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
            <path d="M11 13l9 -9" />
            <path d="M15 4h5v5" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default CertificatedCard;
