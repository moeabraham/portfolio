import React from 'react'
import { Link } from "gatsby"
import {useState} from 'react'
import { StyledHeader} from "../styles/styled-components"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


const Header = (props) => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

      const closeMenu = () => {
        setNavbarOpen(false)
      }
      

    return (
    <StyledHeader >
        {/* fixed-top */}
        {/* class=" navbar-expand-sm navbar-expand-lg */}
                    <nav className="navbarH" > 

                <div className="logo" >
                     <h1 class="name">
                    <Link to="/">
                        Mohamed Soliman
                    </Link></h1>
                </div>
        
        <div className="navBar" >
        <button onClick={handleToggle}>
            {navbarOpen ? ( <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />)
            :
           ( <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}
          
        
        
        </button>

        {/* class="right-nav " */}
            {/* <ul class=" navbar-right"> */}
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >
                <li   onClick={() => closeMenu()}>
                    <Link to="/" >Home</Link>
                </li>

                <li  onClick={() => closeMenu()} >
                    <a href="MoeResume.pdf" >Resume</a>
                </li>

                <li  onClick={() => closeMenu()} >
                    <Link to="/contact" >Contact Me!</Link>
                </li>

            </ul>
            </div>
        </nav>



    </StyledHeader>
    )
}

export default Header