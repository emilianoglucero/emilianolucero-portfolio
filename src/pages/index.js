import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import P5 from '../p5/p5';
import MainAnimation from "../components/MainAnimation";
import Loading from "../components/Loading";

import projectsInfo from "../data/projects";
import { Projects } from "../components/Projects";

export default function Home() {

  const [isLoadingDOM, setIsLoadingDOM] = useState(true);
  
  useEffect(() => {

    setTimeout(() => {
      //window.addEventListener('load', setIsLoading(false));
      window.addEventListener('DOMContentLoaded', setIsLoadingDOM(false));
    }, 2900);

  }, []);

  return isLoadingDOM ? <Loading/>
  :

    <>

    <P5 />

    <div className="container mx-auto my-14 px-6 md:px-12 lg:px-12 text-center text-primary text-4xl font-mono">
      <p className="my-5 leading-normal">Hello, my name is <span className="font-semibold">Emiliano</span>.<br />
      I'm a Front End Developer working remotely from Ciudad de Córdoba, Argentina.</p> 
      <div className="my-11">
        <MainAnimation style={{height: "70%", width: "70%", margin: "auto"}} />
      </div>
      <p className="my-11 leading-normal">
        I enjoy building everything from small business sites to rich interactive web apps.
      </p>
      <p className="leading-normal my-16">
      Interested in hiring me or doing a project together?
      </p>

      <a href="mailto:emilianoglucero@gmail.com" 
        rel="noreferrer" 
        target="_blank" 
        className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md"
        >EMAIL ME</a>


      <p className="leading-normal mt-24 mb-14">
      Personal experiments and some client projects:
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center content-center">

        {
            projectsInfo.map( 
                ( info ) => (
                    <Projects 
                      key={ info.id }
                      info={ info }
                    />
                )
            )
        }
        
      </div>

      <div>
        <p className="my-20">Stay in touch</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-1 md:mx-16 lg:mx-56">
          <a className="hover:opacity-90" href="https://www.linkedin.com/in/emilianoglucero/" rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Linkedin" className="m-auto" icon={faLinkedinIn} size="2x" /></a>
          <a className="hover:opacity-90" href="https://github.com/emilianoglucero" rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Github" className="m-auto" icon={faGithub} size="2x" /></a>
          <a className="hover:opacity-90" href="mailto:emilianoglucero@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Email" className="m-auto" icon={faEnvelope} size="2x" /></a>
          <a className="hover:opacity-90" href="https://www.youtube.com/user/emilianogaston5000" rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="YouTube" className="m-auto" icon={faYoutube} size="2x" /></a>
        </div>
      </div>
    </div>

    </>

  
}

