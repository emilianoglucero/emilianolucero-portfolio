import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP], placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.filename)
  })

  if (!image) {
    return null
  }

  const imageData = getImage(image.node)

  return (
    <GatsbyImage
      image={imageData}
      alt={props.alt}
      style={props.style}
      loading="lazy"
    />
  )
}
