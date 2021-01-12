import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={props.alt}
          fluid={imageSizes}
        />
      );
    }}
  />
)


// export const Image = ( filename ) => {
//   console.log(filename);
//   return(
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile{
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 # Specify the image processing specifications right in the query.
//                 # Makes it trivial to update as your page's design changes.
//                 fluid {
//                 ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}

//     render={(data) => {
//       const image = data.images.edges.find(n => {
//         return n.node.relativePath.includes(filename);
//       });
//       if (!image) { return null; }
      
//       const imageSizes = image.node.childImageSharp.sizes;
//       return (
//         <Img
//           alt={filename}
//           sizes={imageSizes}
//         />
//       );
//     }}
//   />
//   )
// }
