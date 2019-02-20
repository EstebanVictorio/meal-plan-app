import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "component/navigation/navbar"
import SidebarContainer from "component/container/sidebar-container"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        font-family: Helvetica;
        // background-color: #282c34;
        // color: cyan;
        color: darkslategray;
        display : flex;
        flex-direction: column;
    }

    #__next{
        height: 100%;
        display: grid;
    }
`

const Main = ({ className, children }) => (
    <div className={className}>
        <GlobalStyle />
        <Navbar />
        <SidebarContainer />
        {children}
    </div>
)

Main.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

const StyledMain = styled(Main)`
    display: grid;
    grid-template-areas:
        "nav nav"
        "div-1 div-2";
    grid-template-rows: 10% 90%;

    nav {
        grid-area: nav;
        display: flex;
        align-items: center;
    }

    div: nth-of-type(1) {
        grid-area: div-1;
    }

    div: nth-of-type(2) {
        grid-area: div-2;
    }
`

export default StyledMain
