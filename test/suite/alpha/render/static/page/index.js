import React from "react"
import { configure, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Home from "page/index"

const adapter = new Adapter()
configure({ adapter })

const wrapper = render(<Home />)
console.log(wrapper.debug())

export const staticHomeRender = () => {
    it("Static Home Render", () => {
        expect(wrapper.contains(<div />)).toBe(true)
    })
}

export default {
    staticHomeRender
}
