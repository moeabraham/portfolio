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
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import {  faGithub, faTwitter, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'




const IndexPage = () => {


  



  return (
    <Layout>
      <Head page="Home" />
      <div class = "container-fluid " >
        <section class="part-one row " >
      <div class="left col-s6" >
    <div class="col-s6" style={{display:"flex", margin:"10px"}}><img src="/images/profile.png" id="img" class="rounded-circle img-fluid border border-primary"  alt="loading" />  </div>
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
</div>



  </div>
  <div>
  

  </div>

</div>

        </section>

      

      </div>
      <div class=" mt-3 mb-3 line " style={{display:"flex"}}>
      <hr ></hr>

      </div>
<h1 class="mb-2 animate ">Projects</h1>

      <div class="second">
        <div class="row"> 
          <div class="card-sec socbg" >
              <h2>Soccer Data</h2>
                  <div class="sec-icons ">
                      <a href="https://github.com/moeabraham/soccerdataapi" class="iconanimation"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
                      <a href="https://moeabraham.github.io/soccerdataapi/" class="iconanimation"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/></a>
                  </div>

  
          <div class="card" style={{width: "18rem"}}>
            <img  src="/images/soccer.png" alt="Loading..." style={{height:"12rem"}} />
          </div>







          </div>
            <div class="card-sec activbg" >
                <h2>Activity Tracker</h2>
                <div class="sec-icons">
                        <a href="https://github.com/moeabraham/Activity-Tracker-Project" class="iconanimation"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
                        <a href="https://activity-project-unit.herokuapp.com/" class="iconanimation"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/></a>
                </div>


                <div class="card" style={{width: "18rem"}}>
                <img  src="/images/todo2.png" alt="Loading..."  style={{height:"12rem"}}/>
            </div>


            </div>
            
        </div>
        <div class="row "> 
          <div class="card-sec muzikbg" >
              <h2>Muzika</h2>
                  <div class="sec-icons">
                      <a href="https://github.com/moeabraham/Muzika-FE" class="iconanimation"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
                      <a href="https://reactmuzika.netlify.app/" class="iconanimation"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/></a>
                  </div>

  
          <div class="card" style={{width: "18rem"}}>
            <img  src="/images/cassette.png" alt="Loading..." style={{height:"12rem"}} />
          </div>







          </div>
            <div class="card-sec moovbg" >
                <h2>moov</h2>
                <div class="sec-icons moovbg">
                        <a href="https://github.com/cardioforcake/portfolio-project-moov-app" class="iconanimation"> <FontAwesomeIcon icon={faGithub} size="2x" color="#90CDF4"/></a>
                        <a href="https://cfc-moov.herokuapp.com/" class="iconanimation"> <FontAwesomeIcon icon={faGlobe} size="2x" color="#90CDF4"/></a>
                </div>


                <div class="card" style={{width: "18rem"}}>
                <img  src="/images/truck.png" alt="Loading..."  style={{height:"12rem"}}/>
            </div>


            </div>
            
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage



























