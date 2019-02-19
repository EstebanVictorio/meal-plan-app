import PropTypes from "prop-types"
import Navbar from "component/navigation/navbar"
import { createGlobalStyle } from "styled-components"

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
    }
`

const Main = ({ children }) => (
    <div>
        <GlobalStyle />
        <Navbar />
        {children}
    </div>
)

Main.propTypes = {
    children: PropTypes.object.isRequired
}

export default Main
