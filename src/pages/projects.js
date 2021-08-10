import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import data from "../data/projects.json"
// import { StaticImage } from "gatsby-plugin-image"\
// import { graphql } from "gatsby"


const Projects = () => {
    console.log(data)
  return (
    <Layout>
      <Head page="Projects" />
      <h1>Projects Page</h1>
      <section style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
          {
              data.map((project,idx) =>(
                <article key={idx}>
                    <img style={{height:175, border:"2px solid #333"}} src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.githubLink}>View on Github</a>
                    <br />
                    <a href={project.deployedLink}>View Deployed Project</a>
                    <br />
                </article>
              ))
          }
      </section>
    </Layout>
  )
}

export default Projects
