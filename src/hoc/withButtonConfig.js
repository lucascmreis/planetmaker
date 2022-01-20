export const withButtonConfig = (WrappedComponent, config) => {

    const defaultConfig = {
        onClick: () => alert('quando não passo nada, isso é o que vem direto do hoc por default'),
        type: 'primary'
    }
    return props => {
        return <WrappedComponent {...defaultConfig} {...config }{...props} />
      }
}