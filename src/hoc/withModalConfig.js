export const withModalConfig = (WrappedComponent, config) => {
    const defaultConfig = {
        destroyOnClose: true
    }
    return props => {
        return <WrappedComponent {...defaultConfig} {...config} {...props} />
    }
}