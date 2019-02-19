import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Home from 'page/index'
const adapter = new Adapter()
configure({adapter})


const wrapper = shallow(<Home/>)

export const homeRender = () => {
    it('Home Render', () => {
        expect(wrapper.contains(
            <div>Hello World!!!</div>
        )).toBe(true)
    })
}

export default {
    homeRender
}