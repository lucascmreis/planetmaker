export const withFormConfig = (WrappedComponent, config) => {

    const defaultConfig = {
        layout:"vertical",
        name:"form_in_modal",
    }
    return props => {
        return <WrappedComponent {...defaultConfig} {...config }{...props} />
      }
}