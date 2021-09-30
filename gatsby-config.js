require('dotenv').config()


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Moes portfolio",
    author: " Mohamed Nagy",
    description:"A personal website for Mohamed Nagy"
    

  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-contentful",
      options:{
        spaceId:"e3yqezmipk93",
        accessToken:"9IVHGK8uj931Zob5Q0D-Sde7AOyqC72p594hRVa5b2Q",
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "blog",
        path: "./src/posts"
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-google-fonts",
      options:{
        fonts:[
          "roboto mono",
          'muli\:400,400i,700,700i',

        ],
        display:"swap",
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
    
  
  ],
};
