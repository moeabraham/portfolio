import styled from "styled-components"



export const StyledHeader = styled.header`
display:flex;
align-items: center;
/* justify-content: space-between; */
/* background-color: rgb(235, 216, 52); */
color: black;
height: 5rem;
padding: 0 1rem;
/* box-shadow: 1px 1px 3px 1px #808080; */

.smallnav{
    flex-grow:1
    width:100vw;
}
header{
    display:flex;

}

.right-nav{
    display:flex;
    justify-content: center;
    align-items: flex-end
}
.left-nav{
    flex-grow: 1;
}
a{
    text-decoration: none;
    color: inherit
}
h1{
    margin: 0;
    text-align:left;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
}
nav{
    display: flex;
    align-items: center;

}
ul{

    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    li{
        margin-right: 1rem;
        margin: 0 1rem 0 0 ;
        a{
            font-weight:700;
        }
    }
}


` 

export const StyledFooter = styled.footer`
display:flex;
align-items: center;
justify-content: center;
height: 5rem;
`

export const StyledLayout = styled.div`
display:flex;
margin:0;
flex-direction: column;
min-height:100vh;
& > div {
    flex-grow:1;
}
`

export const styledIcons = styled.div`

display:flex;

`



