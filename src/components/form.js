import {Form} from 'antd'


export const FormComponent = ({children, ...props}) => {
    return <Form {...props} >{children}</Form>
}