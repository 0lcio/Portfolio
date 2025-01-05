import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex gap-10">
      <a
        target="_blank"
        href={process.env.GITHUB_LINK}
        rel="noopener noreferrer"
        className="bg-[#0a0a0a]/85"
      >
        <FaGithub size={30} />
      </a>
      <a
        target="_blank"
        href={process.env.LINKEDIN_LINK}
        rel="noopener noreferrer"
        className="bg-[#0a0a0a]/85"
      >
        <FaLinkedin size={30} />
      </a>
      <a href={process.env.MAILTO} className="bg-[#0a0a0a]/85">
        <MdEmail size={30} />
      </a>
    </div>
  );
};

export default Contact;
