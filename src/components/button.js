import {Button} from 'antd'

export const ButtonComponent = ({children, ...props}) => {
    console.log(props)
    return(
        <Button {...props}> {children}</Button>
    )
}
