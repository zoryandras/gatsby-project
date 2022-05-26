import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'


const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Cooking your cat was never been this much fun!</h2>
            <p>
              The main concept of this page was a christmas gift for my
              co-worker in 2015, where I collected all my favourite recipes and
              made a lil' book of it.
            </p>
            <p>
              As a long time RPG fanatic and avid reader of Terry Pratchett and
              Stephen King, my imagination is kinda wild, so buckle up and enjoy
              the ride!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/profilePic.jpg"
            alt="my cheeks"
            className="about-img"
            placeholder="blurred"
          />
          <section className="featured-recipes">
            <h5>Some featured recipes just to tickle your fancy!</h5>
            <RecipesList recipes={recipes} />
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About