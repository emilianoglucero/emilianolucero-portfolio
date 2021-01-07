import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

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
import Img from "gatsby-image";
import MainAnimation from "../components/MainAnimation";
import Loading from "../components/Loading";




export default function Home({ data }) {

  const [isLoadingDOM, setIsLoadingDOM] = useState(true);
  
  useEffect(() => {

    setTimeout(() => {
      //window.addEventListener('load', setIsLoading(false));
      window.addEventListener('DOMContentLoaded', setIsLoadingDOM(false));
    }, 2800);

  }, []);


  return isLoadingDOM ? <Loading/>
  :

    <>

    <P5 />

    <div className="container mx-auto my-14 px-6 md:px-12 lg:px-12 text-center text-primary text-4xl font-mono">
      <p className="my-5 leading-normal">Hello, my name is <span className="font-semibold">Emiliano</span>.<br />
      I'm a Front End Developer working remotely from Ciudad de Córdoba, Argentina.</p> 
      <div className="my-11">
        {/* <Img
          fluid={data.profile.childImageSharp.fluid}
          style={{height: "50%", width: "50%", margin: "auto", borderRadius:"50%"}} 
          alt="Emiliano Lucero"
        /> */}
        <MainAnimation style={{height: "70%", width: "70%", margin: "auto"}} />
      </div>
      <p className="my-11 leading-normal">
        I enjoy building everything from small business sites to rich interactive web apps.
      </p>
      <p className="leading-normal my-16">
      Interested in hire me or doing a project together?
      </p>

			{/* <button className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md">EMAIL ME</button> */}
      <a href="mailto:emilianoglucero@gmail.com" 
        rel="noreferrer" 
        target="_blank" 
        className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md"
        >EMAIL ME</a>


      <p className="leading-normal mt-24 mb-14">
      Personal experiments and some client projects:
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center content-center">

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://github.com/emilianoglucero/giphy-api-example" rel="noreferrer" target="_blank">
          <Img
            fluid={data.giphy.childImageSharp.fluid}
            alt="A super super super simple gif searcher powered by Giphy."
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Giphy searcher</div>
            <p className="text-gray-700 text-base">
            A super super super simple gif searcher powered by Giphy.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#UnitTesting</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Javascript</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://github.com/emilianoglucero/twitter-bot" rel="noreferrer" target="_blank">
          <Img
            fluid={data.twitter.childImageSharp.fluid}
            alt="Twitter Bot"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Twitter Bot</div>
            <p className="text-gray-700 text-base">
            A twitter bot made with Javascript, Node.js and Express.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Node.js</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Express</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://www.alphatrainingcenter.com.ar/" rel="noreferrer" target="_blank">
          <Img
            fluid={data.alpha.childImageSharp.fluid}
            alt="Alpha Training Center Dojo"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Alpha Training Center Dojo</div>
            <p className="text-gray-700 text-base">
            Landing page made for the Alpha Training Center Dojo.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Gatsby</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Sass</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/compraventa" rel="noreferrer" target="_blank">
          <Img
            fluid={data.compraventa.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Compraventa</div>
            <p className="text-gray-700 text-base">
            Net Art work inspired by a telegram group made with React.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#NetArt</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Javascript</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://ateitiscorp.com/" rel="noreferrer" target="_blank">
          <Img
            fluid={data.ateitis.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Ateitis Corp</div>
            <p className="text-gray-700 text-base">
            Headless CMS and Ecommerce for Ateitis Corp made with React, Gatsby and Wordpress.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#GraphQL</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Wordpress</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#SVGAnimation</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://chrome.google.com/webstore/detail/me-encanta-todo-eso/lelgaanomejijmiolbncggicogpalmcb" rel="noreferrer" target="_blank">
          <Img
            fluid={data.chrome.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Me encanta todo eso</div>
            <p className="text-gray-700 text-base">
            Google Chrome plugin made to change the Facebook Desktop UI.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ChromePlugin</span>
            {/* <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#UI</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/screenshots" rel="noreferrer" target="_blank">
          <Img
            fluid={data.screenshots.childImageSharp.fluid}
            alt="Screenshots"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Screenshots</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js and 3D.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#NetArt</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#3D</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/dibujate-algo-lindo" rel="noreferrer" target="_blank">
          <Img
            fluid={data.color.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Colorea un politic</div>
            <p className="text-gray-700 text-base">
            Net Art work to colour political persons from Argentina.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PHP</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/soy-una-antorcha" rel="noreferrer" target="_blank">
          <Img
            fluid={data.diego.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Hola Diego Armando Maradona</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js inspired by Diego Armando Maradona <span role="img" aria-label="two-hearts">💕</span> 
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            {/* <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/zarandraca-vs-beltran" rel="noreferrer" target="_blank">
          <Img
            fluid={data.sarandraca.childImageSharp.fluid}
            alt="Emiliano Lucero"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">El viaje de sarandraca</div>
            <p className="text-gray-700 text-base">
            Net Art and Video Game work dedicated to a friend. Playing with p5.js and inspired by Flappy Bird.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PHP</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://play.google.com/store/apps/details?id=com.lse.ar.rosario.art&hl=es&gl=US" rel="noreferrer" target="_blank">
          <Img
            fluid={data.art.childImageSharp.fluid}
            alt="Asociación Rosarina de Tenis App"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Asociación Rosarina de Tenis App</div>
            <p className="text-gray-700 text-base">
            Mobile Hybrid App for The Asociación Rosarina de Tenis made with Apache Cordova.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ApacheCordova</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Framework7</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://www.instagram.com/ar/532471514229195/" rel="noreferrer" target="_blank">
          <Img
            fluid={data.instagram.childImageSharp.fluid}
            alt="Instagram effect"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Bebeto Face Filter</div>
            <p className="text-gray-700 text-base">
            Instagram face filter made it with Spark AR Studio.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Spark</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Instagram</span>
            {/* <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Framework7</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <a className="hover:opacity-90" href="https://bebeto.pizza/sin-goyete" rel="noreferrer" target="_blank">
          <Img
            fluid={data.boca.childImageSharp.fluid}
            alt="abri la voki"
          />
        </a>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Abrí la voki</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js, access to camera device and facial recognition models.
            </p>
          </div>
          <div className="px-6 py-4 flex-grow">
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#NetArt</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#p5.js</span>
          </div>
        </div>

        
        
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

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "emi.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    giphy: file(relativePath: { eq: "projects/giphy.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    twitter: file(relativePath: { eq: "projects/twitter.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    alpha: file(relativePath: { eq: "projects/alpha.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    art: file(relativePath: { eq: "projects/art.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ateitis: file(relativePath: { eq: "projects/ateitis.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    boca: file(relativePath: { eq: "projects/boca.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chrome: file(relativePath: { eq: "projects/chrome.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    color: file(relativePath: { eq: "projects/color.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    compraventa: file(relativePath: { eq: "projects/compraventa.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    diego: file(relativePath: { eq: "projects/diego.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instagram: file(relativePath: { eq: "projects/instagram.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sarandraca: file(relativePath: { eq: "projects/sarandraca.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenshots: file(relativePath: { eq: "projects/screenshots.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
