import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
// import data from "../data/projects.json"
// import Header from "../components/header"

import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faUser, faEdit, faThumbsUp} from '@fortawesome/free-regular-svg-icons'
// import {faListAlt, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
// import {faRedo, faShieldAlt, faGlobe, faAward, faDev,faAnchor} from '@fortawesome/free-solid-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import {  faGithub, faTwitter, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../utils/font-awesome';

// import './css/font-awesome.css'
// const mediaQuery = window.matchMedia('(max-width: 368px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert

//   const header = document.getElementById("fixed-top")
//   console.log(header)
//   header.classList="small"
  
//   alert('Media Query Matched!')
// }


const IndexPage = () => {


  



  return (
    <Layout>
      <Head page="Home" />
      <div class = "container-fluid " >
        <section class="part-one row " >
          {/* my-5 */}
      <div class="left col-s6" >
      {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"> */}
    {/* ,width:"300px", height:"300px" */}
    <div class="col-s6" style={{display:"flex", margin:"10px"}}><img src="images/image-four.png" id="img" class="rounded-circle img-fluid border border-primary"  alt="loading" />  </div>
{/* </div>
</div>
</div> */}
    </div>
    
<div class="right col-s6 " >
  <div>
<h1 class="sec-header h1">Hello, I am Moe Abraham!</h1>
<p class="text">I am a full stack web developer who is kickstarting his coding journey in his early 30's.<br></br> Self motivated and curious with strong analytical skills.<br></br> I have a very diverse professional background as well as personal.<br></br> Can always find time to chat movies, soccer & coding now </p>
<div class="icons">
  <div class="iconanimation">
  <a href="https://twitter.com/home"> <FontAwesomeIcon icon={faTwitter} size="2x" color="#90CDF4"/></a>
</div>
  <div class="iconanimation">
  <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
</div>
  <div class="iconanimation">
  <a href="https://www.linkedin.com/in/moeabraham/"> <FontAwesomeIcon icon={faLinkedin} size="2x" color="#90CDF4"/></a>
</div>
{/* <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
<a href="https://www.linkedin.com/in/moeabraham/"> <FontAwesomeIcon icon={faLinkedin} size="2x" color="#90CDF4"/></a> */}
</div>



  </div>
  <div>
  

  </div>

</div>

        </section>

      

      </div>
      <div class="divider mt-2 mb-3 primary">
      <hr ></hr>

      </div>
{/* <section> */}
      <div class="container-fluid sec-projects">
      <h2 class="row h1 font">Projects</h2>

        <div>
        </div>
        <div class="row text-center part-two container-fluid ">

      <div class="col-md-4 mb-4 ">


       <a href="https://moeabraham.github.io/soccerdataapi/"> <img class="rounded-circle border border-primary border-4 imgfit" alt="100x100" src="images/sport.png"
          data-holder-rendered="true" /> </a>
          <article class="proj-article"> 
          <div>  
            <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/> </a> 
            
            </div>
          <div><a href="https://moeabraham.github.io/soccerdataapi"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/> </a></div>

          </article>
          
        <h2 class="my-2 h2 proj-font">Soccer Team Data</h2>

      </div>
      <div class="col-md-4 mb-4">


       <a href="https://activity-project-unit.herokuapp.com/"> <img class="rounded-circle z-depth-2 border border-success border-4 imgfit" alt="100x100" src="images/activity.png"
          data-holder-rendered="true" /></a>
          <article class="proj-article"> 
          <div>  
            <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/> </a> 
            
            </div>
          <div><a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/> </a></div>

          </article>
          
            <h2 class="my-2 h2 proj-font">Activity Tracker</h2>


      </div>
      <div class="col-md-4 mb-4">


       <a href="https://reactmuzika.netlify.app"> <img class="rounded-circle border border-danger border-4 imgfit" alt="100x100" src="images/music.png"
          data-holder-rendered="true" /></a>

<article class="proj-article"> 
          <div>  
            <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/> </a> 
            
            </div>
          <div><a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/> </a></div>

          </article>
          
        <h2 class="my-2 h2 proj-font">Music Data</h2>

      </div>


      <div class="col-md-4 mb-4 ">

<a href="https://cfc-moov.herokuapp.com/"> <img class="rounded-circle border border-info border-4 imgfit" alt="100x100" src="images/moov.png" 
  data-holder-rendered="true" /> </a>
  <article class="proj-article">  
          <div>  
            <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/> </a> 
            
            </div>
          <div><a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/> </a></div>

          </article>
          
<h2 class="my-2 h2 proj-font">Moov</h2>

</div>

<div class="col-md-4 mb-4 ">

<a href="https://cfc-moov.herokuapp.com/"> <img class="rounded-circle border border-info border-4 imgfit" alt="100x100" src="images/moov.png" 
  data-holder-rendered="true" /> </a>
  <article class="proj-article">  
          <div>  
            <a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/> </a> 
            
            </div>
          <div><a href="https://github.com/moeabraham"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/> </a></div>

          </article>
          
<h2 class="my-2 h2 proj-font">Soccer cards<h4 style={{color:"red"}}>recent deployment issues with Django, runs locally <h6>(Sep,30th,2021)</h6></h4></h2>

</div>









{/* <div class="col-md-4 mb-4">


<a href="https://cfc-moov.herokuapp.com/"> <img class="rounded-circle border border-info border-4 imgfit" alt="100x100" src="images/moov.png" 
  data-holder-rendered="true" /> </a>
<h2 class="my-5 h2">Cards Collector</h2>

</div> */}

    </div>

  </div>

  {/* </section> */}

{/* 
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/image-four.png" alt="Avatar" style={{width:"300px",height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div> */}



      
    </Layout>
  )
}

export default IndexPage
