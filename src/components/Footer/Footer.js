import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import CopyToClipboardButton from "../../hooks/useCopyToClipboard"
import arenaIcon from "../../images/icons/arena.svg"

export const Footer = () => {
  return (
    <>
      <div>
        <div>
          <p className="mt-32 leading-normal mb-11 text-balance">
            I bring a keen eye for design and a love for creating fun and
            innovative interfaces, always prioritizing user experience. <br />
            I love collaborating on new projects or just chatting. <br /> Feel
            free to reach out to me!
          </p>
          <CopyToClipboardButton content="emilianoglucero@gmail.com" />
        </div>
        <div>
          <p className="mt-24 leading-normal mb-11">
            Want to know more about my work experience?
          </p>
          <button
            className="px-8 py-2 uppercase transition duration-300 border shadow-sm max-w-max hover:shadow-md hover:bg-custom-yellow border-custom-purple"
            style={{
              transition: "transform 0.3s, border-color 0.3s",
            }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IkGToghTlPxuE47fO8RKe02CeuEjX3dC/view?usp=sharing",
                "_blank"
              )
            }
            onMouseEnter={e => {
              e.target.style.borderColor = "transparent"
              e.target.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "rgb(175, 159, 212)"
              e.target.style.transform = "translateY(0)"
            }}
          >
            See My Resume
          </button>
        </div>
      </div>
      <div>
        <div className="relative grid mt-32 h-80 mb-11">
          <p className="self-center">Find me on</p>
          <a
            className="absolute transition-transform transform duration-300 hover:row-span-12 hover:rotate-6 md:top-[27%] md:left-[21.5%] top-[-5%] left-[30%]"
            href="https://www.linkedin.com/in/emilianoglucero/"
            rel="noreferrer"
            target="_blank"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon
              aria-label="Linkedin"
              className="m-auto"
              icon={faLinkedinIn}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[77%] md:left-[30.5%] top-[65%] left-[10%]"
            href="https://github.com/emilianoglucero"
            rel="noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <FontAwesomeIcon
              aria-label="Github"
              className="m-auto"
              icon={faGithub}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[0%] md:left-[38%] top-[10%] left-[61%]"
            href="mailto:emilianoglucero@gmail.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Email"
          >
            <FontAwesomeIcon
              aria-label="Email"
              className="m-auto"
              icon={faEnvelope}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[73%] md:left-[44.5%] top-[95%] left-[30%]"
            href="https://www.youtube.com/user/emilianogaston5000"
            rel="noreferrer"
            target="_blank"
            aria-label="YouTube"
          >
            <FontAwesomeIcon
              aria-label="YouTube"
              className="m-auto"
              icon={faYoutube}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[80%] md:left-[59.5%] top-[85%] left-[67%]"
            href="https://x.com/emilianoglucero"
            rel="noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              aria-label="X"
              className="m-auto"
              icon={faTwitter}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[50%] md:left-[72.5%] top-[22%] left-[3%]"
            href="https://www.instagram.com/emilianogiannakopoulos/"
            rel="noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              aria-label="Instagram"
              className="m-auto"
              icon={faInstagram}
              size="2x"
            />
          </a>
          <a
            className="absolute transition-transform transform duration-300 hover:rotate-6 md:top-[9%] md:left-[56%] top-[54%] left-[71%]"
            href="https://www.are.na/emiliano-lucero/channels"
            rel="noreferrer"
            target="_blank"
            aria-label="Arena"
          >
            <img
              src={arenaIcon}
              alt="Emiliano Lucero Arena profile"
              className="[width:5rem] [height:5rem]"
            />
          </a>
        </div>
        <div className="flex justify-center mt-40 mb-11">
          <span className="block rotate-180 hover:rotate-0 font-ft88">
            stay curious!
          </span>
        </div>
      </div>
    </>
  )
}
