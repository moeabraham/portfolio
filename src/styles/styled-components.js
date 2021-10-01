import styled from "styled-components"



export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&family=Roboto&family=Titillium+Web:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&family=Roboto&family=Titillium+Web:ital,wght@0,600;1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Noto+Sans+Display&display=swap');

display:flex;
/* align-items: center; */
/* justify-content: space-between; */
/* background-color: rgb(235, 216, 52); */
color: black;
height: 5rem;
padding: 0 1rem;
width:100%;
/* box-shadow: 1px 1px 3px 1px #808080; */
/* 
#smallnav{
    display:flex;
    width:100%;
} */
header{
    display:flex;

}
nav{
    display:flex;
    width:100%;
    /* font-family: 'Noto Sans Display', sans-serif; */
  /* font-family: 'Noto Sans Display', sans-serif; */
  /* font-family: 'Open Sans Condensed', sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Titillium Web', sans-serif; */
  font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;

}

.right-nav{
    display:flex;
    /* justify-content: center;
    align-items: flex-end
    margin-left: auto; */

}
.left-nav{
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
    /* font-family: 'Lato', sans-serif; */
    font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;

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

@media only screen and (max-width: 768px) {
        color:black;
        background-color:lightyellow;
        font-size:1rem
        display:flex;

        nav{
            display:flex;
            width:100%;
            font-family: 'Merriweather', serif;  font-family: 'Lato', sans-serif;
            margin-top:2rem;
            height:1rem;
            align-items:center;
        }
        .right-nav{
    display:flex;
    margin-left:auto;
    font-size:0.6rem;

    /* justify-content: center;
    align-items: flex-end
    margin-left: auto; */

}
.left-nav{
    display:flex;
font-size:0.5rem;
    /* flex-grow: 1; */
    margin-right:auto;
}
.name{
    font-size:1rem;
}

}



` 

export const StyledFooter = styled.footer`
display:flex;
align-items: center;
justify-content: center;
height: 5rem;
margin-top:15rem;
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



