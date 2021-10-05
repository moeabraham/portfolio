import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";


const Head = ({  page }) => {
   
    const {site: {siteMetadata: {title, description}}} = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                description
            }
        }
    }
    
    
    `)

    return (
        <Helmet>
            <title> {`${page} | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />


        </Helmet>


    )
}

export default Head