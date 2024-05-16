import { motion } from "framer-motion";
import ArrowIco from "@/components/icos/ArrowIco";
import { useState } from "react";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const wrapperVariants = {
    open: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleX: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: -90 },
    closed: { rotate: 0 },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 10,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      x: 15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative flex">
           <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ translateY: "50%" }}
        className="flex  gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          <motion.span variants={actionIconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20"
              height="10"
              version="1"
            >
              <path fill="#74acdf" d="M0 0H800V500H0z"></path>
              <path fill="#fff" d="M0 166.67H800V333.34H0z"></path>
              <g id="rays">
                <path
                  id="ray1"
                  fill="#f6b40e"
                  stroke="#85340a"
                  strokeWidth="1.112"
                  d="M396.84 251.31l28.454 61.992s.49 1.185 1.28.859c.79-.327.299-1.512.299-1.512l-23.715-63.956m-.68 24.12c-.347 9.428 5.452 14.613 4.694 23.032-.757 8.42 3.867 13.18 4.94 16.454 1.073 3.274-1.16 5.232-.198 5.698.963.466 3.07-2.12 2.383-6.775-.687-4.655-4.22-6.037-3.39-16.32.83-10.283-4.206-12.678-2.98-22.058"
                ></path>
                <use transform="rotate(22.5 400 250)" xlinkHref="#ray1"></use>
                <use transform="rotate(45 400 250)" xlinkHref="#ray1"></use>
                <use transform="rotate(67.5 400 250)" xlinkHref="#ray1"></use>
                <path
                  id="ray2"
                  fill="#85340a"
                  d="M404.31 274.41c.453 9.054 5.587 13.063 4.579 21.314 2.213-6.525-3.124-11.583-2.82-21.22m-7.649-23.757l19.487 42.577-16.329-43.887"
                ></path>
                <use transform="rotate(22.5 400 250)" xlinkHref="#ray2"></use>
                <use transform="rotate(45 400 250)" xlinkHref="#ray2"></use>
                <use transform="rotate(67.5 400 250)" xlinkHref="#ray2"></use>
              </g>
              <use transform="rotate(90 400 250)" xlinkHref="#rays"></use>
              <use transform="rotate(180 400 250)" xlinkHref="#rays"></use>
              <use transform="rotate(270 400 250)" xlinkHref="#rays"></use>
              <circle
                cx="400"
                cy="250"
                r="27.778"
                fill="#f6b40e"
                stroke="#85340a"
                strokeWidth="1.5"
              ></circle>
              <path
                id="loweyecontour"
                fill="#843511"
                d="M409.47 244.06c-1.897 0-3.713.822-4.781 2.531 2.136 1.923 6.856 2.132 10.062-.219a7.333 7.333 0 00-5.281-2.312zm-.031.438c1.846-.034 3.571.814 3.812 1.656-2.136 2.35-5.55 2.146-7.687.437.935-1.495 2.439-2.067 3.875-2.094z"
              ></path>
              <use
                transform="matrix(-1 0 0 1 800.25 0)"
                xlinkHref="#uppalpebra"
              ></use>
              <use
                transform="matrix(-1 0 0 1 800.25 0)"
                xlinkHref="#eyebrow_nose"
              ></use>
              <use transform="translate(18.862)" xlinkHref="#pupil"></use>
              <use
                transform="matrix(-1 0 0 1 800.25 0)"
                xlinkHref="#lowpalpebra"
              ></use>
              <path
                fill="#85340a"
                d="M395.75 253.84c-.913.167-1.563.977-1.563 1.906 0 1.062.878 1.906 1.938 1.906a1.89 1.89 0 001.563-.812c.739.556 1.764.615 2.312.625.084.002.193 0 .25 0 .548-.01 1.573-.069 2.313-.625.36.516.935.812 1.562.812 1.06 0 1.938-.844 1.938-1.906 0-.929-.65-1.74-1.563-1.906.513.18.844.676.844 1.219a1.28 1.28 0 01-1.281 1.281c-.68 0-1.242-.54-1.282-1.219-.208.417-1.034 1.655-2.656 1.719-1.622-.064-2.447-1.302-2.656-1.719-.04.679-.6 1.219-1.281 1.219a1.28 1.28 0 01-1.281-1.281c0-.542.33-1.038.843-1.219zM397.84 259.53c-2.138 0-2.983 1.937-4.906 3.219 1.068-.427 1.91-1.27 3.406-2.125 1.496-.855 2.772.187 3.625.187h.031c.853 0 2.13-1.041 3.625-.187 1.497.856 2.369 1.698 3.438 2.125-1.924-1.282-2.8-3.219-4.938-3.219-.426 0-1.271.23-2.125.656h-.031c-.853-.426-1.698-.656-2.125-.656z"
              ></path>
              <path
                fill="#85340a"
                d="M397.12 262.06c-.844.037-1.96.207-3.563.688 3.848-.855 4.697.437 6.407.437h.03c1.71 0 2.56-1.292 6.407-.438-4.274-1.282-5.124-.437-6.406-.437h-.031c-.802 0-1.437-.312-2.844-.25z"
              ></path>
              <path
                fill="#85340a"
                d="M393.75 262.72c-.248.003-.519.005-.813.031 4.488.428 2.331 3 7.032 3h.03c4.702 0 2.575-2.572 7.063-3-4.7-.426-3.214 2.344-7.062 2.344h-.031c-3.608 0-2.496-2.421-6.22-2.375zM403.85 269.66a3.848 3.848 0 00-3.846-3.846 3.848 3.848 0 00-3.847 3.846 3.955 3.955 0 013.847-3.04 3.952 3.952 0 013.846 3.04z"
              ></path>
              <path
                id="eyebrow_nose"
                fill="#85340a"
                d="M382.73 244.02c4.915-4.273 11.11-4.915 14.53-1.709.837 1.121 1.373 2.32 1.593 3.57.43 2.433-.33 5.062-2.236 7.756.215-.001.643.212.856.427 1.697-3.244 2.297-6.577 1.74-9.746a13.815 13.815 0 00-.67-2.436c-4.7-3.845-11.11-4.272-15.81 2.138z"
              ></path>
              <path
                id="uppalpebra"
                fill="#85340a"
                d="M390.42 242.74c2.777 0 3.419.642 4.7 1.71 1.284 1.068 1.924.854 2.137 1.068.213.215 0 .854-.426.64s-1.284-.64-2.564-1.708c-1.283-1.07-2.563-1.069-3.846-1.069-3.846 0-5.983 3.205-6.41 2.991-.426-.214 2.137-3.632 6.41-3.632z"
              ></path>
              <use
                transform="translate(-19.181)"
                xlinkHref="#loweyecontour"
              ></use>
              <circle
                id="pupil"
                cx="390.54"
                cy="246.15"
                r="1.923"
                fill="#85340a"
              ></circle>
              <path
                id="lowpalpebra"
                fill="#85340a"
                d="M385.29 247.44c3.633 2.778 7.265 2.564 9.402 1.282 2.136-1.282 2.136-1.709 1.71-1.709-.427 0-.853.427-2.564 1.281-1.71.856-4.273.856-8.546-.854z"
              ></path>
            </svg>
          </motion.span>
          <span>Español</span>
        </motion.li>
        {/* <Option setOpen={setOpen} Icon={FiPlusSquare} text="English" /> */}
      </motion.ul>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 hover:bg-indigo-500 transition-colors"
      >
        <motion.span variants={iconVariants}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10l6 6l6 -6h-12" />
          </svg>
        </motion.span>
      </button>

   
    </motion.div>
  );
};

export default StaggeredDropDown;
