import Main from "component/layout/main"

const getSelectedLayout = layout => {}

const withLayout = ({ Component, layout = "Main" }) => {
    const Layout = getSelectedLayout(layout)
}

export const withMainLayout = Component => () => (
    <Main>
        <Component />
    </Main>
)

export default withLayout
