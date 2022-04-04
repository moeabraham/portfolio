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
            <html lang="en" prefix="og:/images/scrshot.png" />
            <title> {`${page} | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
            {/* <meta name="title" property="og:title" content="[Content title here]">

            <meta property="og:type" content="[Content type here]"> */}


            <meta name="image" property="og:image" content="/images/scrshot.png" />


            {/* <meta name="description" property="og:description" content="[Content description here]">


            <meta name="author" content="[Author name here]"></meta>
 */}
        </Helmet>


    )
}

export default Head