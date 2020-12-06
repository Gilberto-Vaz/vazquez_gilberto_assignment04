import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my blog!</h1>
    <h2>A Day in the Life of Gilberto Blog</h2>
    <p>
    I would like to share with friends and family what a day in my life consists of. I will try and go into detail
    about some of my hobbies, work schedule, and maybe some interesting facts that you might not
    know about me. 
    </p>
  </Layout>
)

export default IndexPage
