import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import data from "../data/projects.json"
import "./index.css"


const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <div class = "container-fluid   " style={{ display:"flex",  }}>
        <section class="part-one row">

      <div class="left col-s6  " style={{ width:"40%"}}>
    <div class="col-s6" style={{display:"flex", margin:"10px"}}><img src="images/image-four.png" id="img" class="rounded-circle img-fluid border border-primary"  />  </div>

    </div>
    
<div class="right col-s6" style={{width:"60%"}}>
  <div>
<h1 class="sec-header h1">Hello, I am Moe Abraham!</h1>
<p class="text">I am a full stack web developer who is kickstarting his coding journey in his early 30's.<br></br> Self motivated and curious with strong analytical skills.<br></br> I have a very diverse professional background as well as personal.<br></br> Can always find time to chat movies, soccer & coding now</p>
  </div>
</div>


        </section>

      

      </div>
      <div class="divider mt-2 mb-3 primary">
      <hr ></hr>

      </div>

      <div class="container-fluid sec-projects">
      <h2 class="row h1">Projects</h2>

        <div>
        </div>
        <div class="row text-center part-two">

      <div class="col-md-3 mb-4">


        <img class="rounded-circle border border-primary border-4 imgfit" alt="100x100" src="images/image-one.png"
          data-holder-rendered="true" />
        <h2 class="my-5 h2">Soccer Team Data</h2>

      </div>
      <div class="col-md-3 mb-4">


        <img class="rounded-circle z-depth-2 border border-success border-4 imgfit" alt="100x100" src="images/image-two.png"
          data-holder-rendered="true" />
                  <h2 class="my-5 h2 ">Activity Tracker</h2>


      </div>
      <div class="col-md-3 mb-4">


        <img class="rounded-circle border border-danger border-4 imgfit" alt="100x100" src="images/image-three.png"
          data-holder-rendered="true" />
        <h2 class="my-5 h2">Music Data</h2>

      </div><div class="col-md-3 mb-4">


<img class="rounded-circle border border-info border-4 imgfit" alt="100x100" src="images/mexicoteam.png"
  data-holder-rendered="true" />
<h2 class="my-5 h2">Moov</h2>

</div>

    </div>

  </div>





      
    </Layout>
  )
}

export default IndexPage
