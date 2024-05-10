import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedAboutMe: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animate_p = {
    animate: { y: [100, 0], opacity: [0, 100] },
    transition: { duration: 0.6, ease: "easeIn" },
  };
  return (
    <div
      ref={ref}
      className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"
    >
      <div className="space-y-3 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <motion.div
          animate={{
            x: [-300, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="md:5/12 lg:w-5/12"
        >
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </motion.div>
        <div className="md:7/12 lg:w-6/12 m-4">
          <motion.h2
            animate={{
              x: [-200, 0],
              opacity: [0, 100],
            }}
            transition={{
              ease: "backIn",
              duration: 1,
            }}
            className="text-2xl text-secondary font-nunito font-semibold md:text-4xl"
          >
            ¡Hola!{" "}
            <motion.span
              animate={{
                opacity: [0, 10],
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className="text-base-100 font-permanent font-thin"
            >
              Soy Ramiro Gumma, un desarrollador FullStack MERN
            </motion.span>{" "}
            con sede en Buenos Aires, Argentina.
          </motion.h2>
          <motion.p
            animate={animate_p.animate}
            transition={animate_p.transition}
            className="mt-6 secondary-text"
          >
            Desde mis comienzos en el mundo del desarrollo web, he sido
            impulsado por un inquebrantable deseo de aprendizaje y mejora
            continua. Mi formación incluye estudios en Coderhouse, respaldados
            por certificaciones en LinkedIn, FreeCodeCamp y HackerRank, lo que
            demuestra mi dedicación y habilidades técnicas. <br />
            Mi enfoque actual se centra en las tecnologías más relevantes, como
            HTML, CSS, Javascript, Node.js, React y Next.js. Además, cuento con
            una sólida experiencia en el uso de herramientas como Express,
            MongoDB, PostgreSQL, AWS, Websocket, Socket.io, Nodemailer, Strapi y
            Stripe para el desarrollo backend, así como React, Tailwind,
            Framer.motion y Axios para el frontend.
          </motion.p>
          <motion.p
            animate={animate_p.animate}
            transition={{ ...animate_p.transition, delay: 0.2 }}
            className="mt-4 secondary-text"
          >
            Lo que me distingue es mi capacidad para adaptarme ágilmente a las
            metodologías de gestión, lo que me permite ofrecer soluciones
            rápidas y efectivas para satisfacer las necesidades de mis clientes.
            Además, mi nivel de inglés es B1, lo que me permite comunicarme
            eficazmente en entornos profesionales y trabajar en equipos
            internacionales. Mi principal objetivo es entregar resultados
            excepcionales que no solo cumplan con las expectativas, sino que las
            superen.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAboutMe;
