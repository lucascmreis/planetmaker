export const withButtonFunctionality = (Component, config) => {
    console.log('config', config)
    return props => {
        return <Component  onClick={()=> alert('quando não passo nada, isso é o que vem direto do hoc por default')} {...config }{...props} />
      }
}