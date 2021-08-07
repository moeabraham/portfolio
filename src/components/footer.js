import React from 'react'

import { StyledFooter } from "../styles/styled-components"

const Footer = ({title, author}) => (
    <StyledFooter>
        <p>Copyright &copy; All Rights Reserved {title} {new Date().getFullYear} <small>Create by {author}</small></p>
    </StyledFooter>
)

export default Footer