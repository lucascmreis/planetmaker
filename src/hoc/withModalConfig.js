export const withModalConfig = (WrappedComponent, config) => {
    return props => {
        return <WrappedComponent {...config} {...props} />
    }
}