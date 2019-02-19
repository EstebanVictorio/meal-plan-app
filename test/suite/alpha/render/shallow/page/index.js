import React from "react"
import { configure, shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import toJson from "enzyme-to-json"
import Home, { Home as UnstyledHome } from "page/index"
import Main from "component/layout/main"

const adapter = new Adapter()
configure({ adapter })

const wrapper = shallow(<Home />)
console.log(wrapper.debug())

export const homeRender = () => {
    it("Home Render", () => {
        expect(
            wrapper.contains(
                <Main>
                    <UnstyledHome />
                </Main>
            )
        ).toBe(true)
    })
}

export default {
    homeRender
}
