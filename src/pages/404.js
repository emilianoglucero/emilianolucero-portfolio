import React from "react"
import { Link } from "gatsby"
import { Seo } from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist :(</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo />

export default NotFoundPage
