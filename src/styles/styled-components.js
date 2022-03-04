import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';



export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&family=Roboto&family=Titillium+Web:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&family=Roboto&family=Titillium+Web:ital,wght@0,600;1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Noto+Sans+Display&display=swap');

display:flex;
color: black;
height: 5rem;
padding: 0 1rem;
width:100%;
header{
    display:flex;

}
nav{
    /* display:flex; */
    width:100%;
  font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;

}

 .row {
    width:87vw;
}
.logo{
    margin-right:0;
    margin-bottom:1rem;
}
.logo > h1 > a{
    text-align:right;
    color:#7b7b7b !important;
}
.navBar {
  position: relative;
}

.navBar button {
  position: fixed;
    /* right:2rem; */
    left:1.5rem;
  top: 0.5rem;
  z-index: 10;
  cursor: pointer;
  background: transparent;
  border: none;
}

.navBar > button > svg {
    margin-bottom:3rem;
    margin-top:1.2rem;;
    padding:0
}

.menuNav {
  overflow-y: scroll;
  list-style: none;
  position: fixed;
  top: 0;
  background: darkcyan;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 0;
  overflow: hidden;
  max-width: 290px;
  z-index: 9;
}

.menuNav.showMenu {
  width: 100vw;
  left:0;
}

a {
  display: block;
  padding: 10px 40px;
  text-decoration: none;
  color: #3fffd2;
  text-transform: uppercase;
  font-weight: bold;
}

.menuNav li:first-child {
  margin-top: 7rem;
}
 ul {
    margin-left:0;

}
/* .name > a {
    font-size:1.6rem;
} */

/* .right-nav{
    display:flex;

} */
/* .left-nav{
    display:flex;

    flex-grow: 1;
}
a{
    text-decoration: none;
    color: inherit
}
h1{
    margin: 0;
    text-align:left;
    font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;

    text-decoration: none;
}
nav{
    display: flex;
    align-items: center;

} */
/* ul{

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
} */

@media only screen and (max-width: 1055px) {
        color:black;
        background-color:lightyellow;
        font-size:1rem;
        display:flex;

        /* nav{
            display:flex;
            width:100%;
            font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;
            margin-top:2rem;
            height:1rem;
            align-items:center;
        }
        
        .logo{
    display:flex;
    margin-left:auto;
    font-size:0.6rem;
            }

.navBar{
    display:flex;
font-size:0.5rem;
    margin-right:auto;
}
.name{
    font-size:1rem;
    right:0;
} */
.name{
    font-size:0.7rem;
    margin-top: 2rem;
    padding-right: 0;

}
.name > a{
    padding-right:0;
    padding-top:10px;
}
/* .second{
    width:100vw;
}
.second > container-fluid{
    width:100vw;
} */





}



` 

export const StyledFooter = styled.footer`
display:flex;
align-items: center;
justify-content: center;
height: 5rem;
margin-top:3rem;
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


