import PropTypes from "prop-types"
import styled from "styled-components"

const Navbar = ({ className }) => <nav className={className}>Meal Plan App</nav>

const StyledNavbar = styled(Navbar)`
    background-color: #fa8072;
    color: whitesmoke;
    font-size: 1.5em;
    font-weight: bold;
`

Navbar.propTypes = {
    className: PropTypes.string.isRequired
}

export default StyledNavbar
