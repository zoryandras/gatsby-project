import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>so this is the 404 page</h1>
          <h3>oh gosh! there's nothing here</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error