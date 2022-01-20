export const withTableConfig = (WrappedComponent, config) => {
    return props => {
        return <WrappedComponent {...config} {...props} />
    }
}