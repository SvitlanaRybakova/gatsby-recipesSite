import React from "react"
import Tagslist from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

// example of component query
const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const data = useStaticQuery(query)
  // const recipes = data.allContentfulRecipe.nodes;
  const {allContentfulRecipe: {nodes:recipes}} = useStaticQuery(query);
  // console.log(recipes);
  
  return (
    <section className="recipes-container">
      <Tagslist recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
