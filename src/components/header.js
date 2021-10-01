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
        <nav  > 
                <div class="left-nav " > <h1 class="name">
                    <Link to="/">
                        Moe Abraham
                    </Link></h1>
                </div>
        {/* <nav> */}
        <div class="right-nav " >
        {/* class="right-nav " */}
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/about">About</Link>
                </li> */}
                {/* <li>
                    <Link to="/projects">Projects</Link>
                </li> */}

                <li>
                    <a href="resume.pdf">Resume</a>

                </li>
                {/* <li>
                    <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                    <Link to="/contact">Contact Me!</Link>
                </li>
                {/* <li>
                    <Link to="/tutorials">Tutorials</Link>
                </li> */}

            </ul>
            </div>

        </nav>



    </StyledHeader>
)

export default Header