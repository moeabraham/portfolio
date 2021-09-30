import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


import { StyledFooter } from "../styles/styled-components"

const Footer = ({title, author}) => (
    <StyledFooter>
        <p>Copyright &copy; All Rights Reserved {title} {new Date().getFullYear()} <small>Create by {author}</small></p>

        <i class="fab fa-twitter"></i>
    </StyledFooter>
)

export default Footer