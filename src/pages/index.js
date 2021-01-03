import React from "react";
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


export default function Home({ data }) {
  return (
    <>

    <P5 />

    <div className="container mx-auto my-14 px-6 md:px-12 lg:px-12 text-center text-primary text-4xl font-mono">
      <p>Hello, my name is <strong>Emiliano</strong>.</p>
      <br />
      <p>I'm a Front End Developer working remotely from Ciudad de Córdoba, Argentina.</p> 
      <br />
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{height: "50%", width: "50%", margin: "auto", borderRadius:"50%"}} 
        alt="Emiliano Lucero"
      />
      <br />
      <p>
        I enjoy building everything from small business sites to rich interactive web apps.
      </p>
      <br />
      <br />
      <p>
      Interested in hire me or doing a project together?
      </p>
      <br />
			<button className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md">EMAIL ME</button>
      <br />
      <br />
      <br />

      <p>
      Personal experiments and some client projects
      </p>
      <br />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center content-center">

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Giphy searcher</div>
            <p className="text-gray-700 text-base">
            A super super super simple gif searcher powered by Giphy.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Unit Testing</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Javascript</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Twitter Bot</div>
            <p className="text-gray-700 text-base">
            A twitter bot made with Javascript, Node.js and Express.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Node.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Express</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Alpha Training Center Dojo</div>
            <p className="text-gray-700 text-base">
            Landing page made for the Alpha Training Center Dojo.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Gatsby</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Sass</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Compraventa</div>
            <p className="text-gray-700 text-base">
            Net Art work inspired by a telegram group made with React.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Net Art</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Javascript</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Ateitis Corp</div>
            <p className="text-gray-700 text-base">
            Headless CMS and Ecommerce for Ateitis Corp made with React, Gatsby and Wordpress.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#GraphQL</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Wordpress</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Me encanta todo eso</div>
            <p className="text-gray-700 text-base">
            Google Chrome plugin made to change the Facebook Desktop UI.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Chrome Plugin</span>
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#UI</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Screenshots</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js and 3D.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Net Art</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#3D</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Colorea un politic</div>
            <p className="text-gray-700 text-base">
            Net Art work to colour political persons from Argentina.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PHP</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Hola Diego Armando Maradona</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js inspired by Diego Armando Maradona 💕
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">El viaje de sarandraca</div>
            <p className="text-gray-700 text-base">
            Net Art and Video Game work. Playing with p5.js and inspired by Flappy Bird.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#p5.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PHP</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Asociación Rosarina de Tenis App</div>
            <p className="text-gray-700 text-base">
            Mobile Hybrid App for The Asociación Rosarina de Tenis made with Apache Cordova.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Apache Cordova</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Framework7</span>
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Bebeto Face Filter</div>
            <p className="text-gray-700 text-base">
            Instagram face filter made with Spark AR Studio.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Spark</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Instagram</span>
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Framework7</span> */}
          </div>
        </div>

        <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">Abrí la voki</div>
            <p className="text-gray-700 text-base">
            Net Art work. Playing with p5.js, access to camera device and facial recognition models.
            </p>
          </div>
          <div className="px-6 py-4 flex-grow">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Net Art</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#p5.js</span>
          </div>
        </div>

        
        
      </div>

      <div>
        <p className="my-20">Contact me</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-1 md:mx-16 lg:mx-56">
          <FontAwesomeIcon className="m-auto" icon={faLinkedinIn} size="2x" />
          <FontAwesomeIcon className="m-auto" icon={faGithub} size="2x" />
          <FontAwesomeIcon className="m-auto" icon={faEnvelope} size="2x" />
          <FontAwesomeIcon className="m-auto" icon={faYoutube} size="2x" />
        </div>
      </div>
    </div>

    </>

  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "emi.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
