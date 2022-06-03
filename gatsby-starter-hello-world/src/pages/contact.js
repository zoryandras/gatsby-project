import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section classname="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Do you have any questions, why did I did this? Some recipes are
              not clear for you and you don't know what to do? Your house is on
              fire because when you poured out milk, everything just went to
              hell? Contact me!
            </p>
            <p>
              This webpage is for fun and for showcasing my skills in Gatsby. I
              hope you did like it as much as I did making it!
            </p>
            <p>And no. I don't cook cats.</p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xbjwwoqy"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your e-mail</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Some featured recipes just to tickle your fancy!</h5>
          <RecipesList recipes={recipes} />
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

export default Contact