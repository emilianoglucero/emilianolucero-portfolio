import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import CopyToClipboardButton from "../hooks/useCopyToClipboard"

export const Footer = () => {
  return (
    <>
      <div>
        <p className="mt-32 mb-16 leading-normal">
          I'm always excited to collaborate on new projects or just have a chat.
          Feel free to reach out to me!
        </p>
        <CopyToClipboardButton content="emilianoglucero@gmail.com" />
      </div>
      <div>
        {/* <p className="pt-24 pb-10">Find me on</p> */}

        <div className="grid grid-cols-1 gap-2 mx-1 my-16 md:grid-cols-4 md:mx-16 lg:mx-56">
          <a
            className="transition-transform transform duration-250 hover:rotate-3"
            href="https://www.linkedin.com/in/emilianoglucero/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              aria-label="Linkedin"
              className="m-auto"
              icon={faLinkedinIn}
              size="2x"
            />
          </a>
          <a
            className="transition-transform transform duration-250 hover:rotate-3"
            href="https://github.com/emilianoglucero"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              aria-label="Github"
              className="m-auto"
              icon={faGithub}
              size="2x"
            />
          </a>
          <a
            className="transition-transform transform duration-250 hover:rotate-3"
            href="mailto:emilianoglucero@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              aria-label="Email"
              className="m-auto"
              icon={faEnvelope}
              size="2x"
            />
          </a>
          <a
            className="transition-transform transform duration-250 hover:rotate-3"
            href="https://www.youtube.com/user/emilianogaston5000"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              aria-label="YouTube"
              className="m-auto"
              icon={faYoutube}
              size="2x"
            />
          </a>
          <a
            className="transition-transform transform duration-250 hover:rotate-3"
            href="https://x.com/emilianoglucero"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              aria-label="X"
              className="m-auto"
              icon={faTwitter}
              size="2x"
            />
          </a>
        </div>
      </div>
    </>
  )
}
