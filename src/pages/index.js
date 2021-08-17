import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import data from "../data/projects.json"
import "./index.css"


const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <div class = "container" style={{ display:"flex", margin:"auto" }}>
      
    <div class="col-s6" style={{display:"flex", margin:"10px"}}><img src="images/image-four.png" id="img" class="rounded-circle img-fluid border border-danger"  />  </div>
    
<div class="circular-sb col-s6">
<h1>An aspiring web developer who is eager to learn and to keep improving, working while travelling is definetly a dream that I am working hard on achieving !!</h1>  <div class="circle3"></div>
  <div class="circle4"></div>
</div>



      </div>

      
    </Layout>
  )
}

export default IndexPage
