import { useState } from "react"
import Sidebar from "component/navigation/sidebar"
import { keyframes } from "styled-components"

const SidebarContainer = () => {
    const [collapse, setCollapse] = useState(false)

    return (
        <Sidebar
            collapse={collapse}
            setCollapse={setCollapse}
            animations={{ expandAnim, collapseAnim }}
        />
    )
}

const expandAnim = keyframes`
    from{
        width: 60px;
    }

    to{
        width: 200px;
    }
`

const collapseAnim = keyframes`
    from{
        width: 200px;
    }

    to{
        width: 60px;
    }
`

export default SidebarContainer
