import React from 'react'
import { Link } from "gatsby"

import { StyledHeader } from "../styles/styled-components"
// import resume from "../../static/resume.pdf"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


const Header = (props) => (
    <StyledHeader>
        {/* fixed-top */}
        {/* class=" navbar-expand-sm navbar-expand-lg */}
        <nav class="navbar navbar-expand-md  " > 

                <div class="left-nav " > <h1 class="name">
                    <Link to="/">
                        Mohamed Soliman
                    </Link></h1>
                </div>
        {/* <nav> */}
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button> */}
 {/* collapse navbar-collapse justify-content-between " id="collapsibleNavbar" */}
        <div class="right-nav" >
        {/* class="right-nav " */}
            <ul class=" navbar-right">

                <li  >
                    <Link to="/" >Home</Link>
                </li>

                <li >
                    <a href="MoeResume.pdf" >Resume</a>

                </li>

                <li >
                    <Link to="/contact" >Contact Me!</Link>
                </li>

            </ul>
            </div>

        </nav>



    </StyledHeader>
)

export default Header