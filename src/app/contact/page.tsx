import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex gap-5">
      <a
        target="_blank"
        href={process.env.GITHUB_LINK}
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        target="_blank"
        href={process.env.LINKEDIN_LINK}
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a href={process.env.LINKEDIN_LINK} rel="noopener noreferrer">
        <MdEmail size={30} />
      </a>
    </div>
  );
};

export default Contact;
