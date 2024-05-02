import React from "react";
import { type Certificated } from "@/styles/interfaces/project";
const CertificatedCard: React.FC<{ certificate: Certificated }> = ({
  certificate,
}) => {
  return (
    <div className="flex">
      <img
        className="object-contain w-full rounded-lg max-w-"
        src={certificate.image}
        alt={certificate.id_certificate || ''}
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a href="#" className="text-xl font-semibold">
          How to use sticky note for problem solving
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          On: 20 October 2019
        </span>
      </div>
    </div>
  );
};

export default CertificatedCard;
