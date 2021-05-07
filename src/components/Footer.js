import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
  return (
    <div>
      <p className="pt-24 pb-10">Stay in touch</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-1 md:mx-16 lg:mx-56">
        <a
          className="hover:opacity-90"
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
          className="hover:opacity-90"
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
          className="hover:opacity-90"
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
          className="hover:opacity-90"
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
      </div>
    </div>
  )
}
