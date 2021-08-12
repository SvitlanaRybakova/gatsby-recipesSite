import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
 
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <Wrapper>
      {nodes.map((image, index)=> {
        const pathToImage = getImage(image)
        return (
          <article key={index}>
            <GatsbyImage
              image={pathToImage}
              alt={image.name}
              className="img-wrapper"
              imgClassName="image"
            />
            <p>{image.name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

.img-wrapper{
  margin-right: 5px;
  
}
.image{
  border-radius: 15px;
}
`
export default Gallery
