export const withModalFunctionality = (WrappedComponent, config) => {
    return props => {
        return <WrappedComponent {...config} {...props} />
    }
}