import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is Gilberto and this is my blog! I'm also a web development student.</h2>
    <p>Need a web developer? <Link to="/contact">Click Here </Link></p>
  </Layout>
)

export default IndexPage
