import React from "react";
import { graphql } from "gatsby"

import P5 from '../p5/p5';
import Img from "gatsby-image";


export default function Home({ data }) {
  return (
    <>

    <P5 />

    <div class="container mx-auto my-14 px-44 text-center text-primary text-4xl font-mono">
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
			<button class="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md">EMAIL ME</button>
      <br />
      <br />
      <br />

      <p>
        Some personal and client projects
      </p>
      <br />
      
      <div className="flex space-x-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg flex-1">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg flex-1">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg flex-1">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Emiliano Lucero"
        />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>

        
        
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <p>Contact me</p>


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
