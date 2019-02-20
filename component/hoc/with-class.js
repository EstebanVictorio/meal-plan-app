const withClass = ({ Component, className }) => () => (
    <Component className={className} />
)

export default withClass
