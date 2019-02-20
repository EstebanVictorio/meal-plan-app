// @flow
import * as React from "react"
import styled from "styled-components"

type Props = {
    className: string,
    collapse: boolean,
    setCollapse: Function,
    animations: Object
}

const choseAnimation = (isCollapsed: boolean, animations: Object) =>
    isCollapsed ? animations.collapseAnim : animations.expandAnim

const choseWidth = isCollapsed => (isCollapsed ? 60 : 200)

export const Sidebar = ({ className, collapse, setCollapse }: Props) => {
    return (
        <div className={className}>
            <input
                value="Toggle"
                type="button"
                onClick={() => setCollapse(!collapse)}
            />
        </div>
    )
}

Sidebar.propTypes = {}

const StyledSidebar = styled(Sidebar)`
    width: ${({ collapse }) => choseWidth(collapse)}px;
    animation: ${({ animations, collapse }) =>
            choseAnimation(collapse, animations)}
        0.125s linear;
    background-color: gray;
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    max-width: 200px;
    display: flex;
    justify-content: center;

    input[type="button"] {
        width: 100%;
        height: 20%;
    }
`

export default StyledSidebar
