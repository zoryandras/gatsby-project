import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"


export default function Home() {
  return (
    <Layout>
      <h1>HOME PAGE</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  )
}
